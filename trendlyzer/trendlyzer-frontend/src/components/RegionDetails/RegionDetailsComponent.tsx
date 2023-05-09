/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import { Alert, Box, Typography, Snackbar } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

import { getRegionTrends } from '../../services/dashboardService';
import { RegionTrendsResponse } from '../../models/common';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { CountriesContext } from '../../context/CountriesContext';
import highchartsMap from 'highcharts/modules/map';
import Loader from '../UIComponents/Loader/LoaderComponent';

highchartsMap(Highcharts);

const defaultState: RegionTrendsResponse[] = [
  {
    geoCode: '',
    geoName: '',
    value: 0,
  },
];

const RegionDetailsComponent = ({
  searchKeyword,
  startDate,
  endDate,
  country = 'All',
  showTable = true,
  title = '',
}: any) => {
  const [trendsList, setTrendsList] = useState<RegionTrendsResponse[]>(defaultState);
  const [options, setOptions] = useState<any | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const { mapTopology, worldMapTopology } = useContext(CountriesContext);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState<boolean>(false);
  const [rows, setRows] = useState<GridRowsProp>([]);
  const columns: GridColDef[] = [
    {
      field: 'region',
      headerName: 'Region',
      sortingOrder: ['desc', 'asc'],
      flex: 1,
      headerClassName: 'searchHeaderTable',
      resizable: false,
    },
    {
      field: 'searches',
      headerName: 'Searches',
      sortingOrder: ['desc', 'asc'],
      flex: 1,
      headerClassName: 'searchHeaderTable',
      resizable: false,
    },
  ];

  useEffect(() => {
    if (searchKeyword) {
      setLoading(true);
      setTrendsList(defaultState);
      const params: any = {
        keyword: searchKeyword,
        startTime: dayjs(startDate).format('YYYY-MM-DD'),
        endTime: dayjs(endDate).format('YYYY-MM-DD'),
      };
      if (country !== 'All') {
        params.geocode = country;
      }
      getRegionTrends(params)
        .then((response) => {
          if (response.data.status) {
            let newData: any;
            const topology: any = country === 'All' ? worldMapTopology : mapTopology;
            topology.title = 'Region wise trends heat map';
            topology.features.forEach((feature: any) => {
              if (feature.properties.name || feature.properties.region) {
                newData = {
                  ...newData,
                  [(feature.properties.name || feature.properties.region).replace(/\s+/g, '')]: {
                    ...feature.properties,
                    value: 0,
                  },
                };
              }
            });

            const x = response.data.result;
            x.forEach((trend: any) => {
              if (newData[trend.geoName.replace(/\s+/g, '')]) {
                newData[trend.geoName.replace(/\s+/g, '')].value = trend.value || 0;
              }
            });
            const rowData: any = [];
            const dataset: any = Object.values(newData).map((list: any, index) => {
              rowData.push({
                id: index + 1,
                region: list.name,
                searches: list.value,
              });
              return [list['hc-key'], list.value];
            });
            setOptions({
              title: {
                text: title || topology.title,
              },
              colorAxis: {
                min: 0,
                stops: [
                  [0, '#f72585ff'],
                  [100, '#480ca8ff'],
                ],
                max: 100,
              },
              mapNavigation: {
                enabled: true,
              },
              series: [
                {
                  mapData: topology,
                  data: dataset,
                  name: 'Search trends',
                  states: {
                    hover: {
                      color: '#4cc9f0ff',
                    },
                  },
                },
              ],
            });
            setTrendsList(x);
            setRows(rowData);
            setLoading(false);
          }
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
          setShowError(true);
        });
    }
  }, [searchKeyword, startDate, endDate, country, mapTopology]);

  return (
    <Box sx={{ mt: 4 }}>
      {!loading && showTable && trendsList.length <= 1 && (
        <Typography variant='body2' component='p' sx={{ ml: 4 }}>
          Start by providing keyword for trends updated based on region
        </Typography>
      )}
      {loading && showTable && <Loader />}
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={showError}
          key='topright'
          onClose={() => setShowError(false)}
          autoHideDuration={5000}
        >
          <Alert severity='error' sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
      {!loading && trendsList.length > 1 && (
        <>
          <div style={{ width: '100%' }}>
            <HighchartsReact
              constructorType={'mapChart'}
              highcharts={Highcharts}
              options={options}
            />
          </div>
          {showTable && (
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: { paginationModel: { pageSize: 5 } },
                  sorting: {
                    sortModel: [{ field: 'region', sort: 'asc' }],
                  },
                }}
                pageSizeOptions={[5, 10, 15]}
                sx={{ m: 4 }}
                rowSelection={false}
                autoHeight={true}
                columnThreshold={2}
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default RegionDetailsComponent;
