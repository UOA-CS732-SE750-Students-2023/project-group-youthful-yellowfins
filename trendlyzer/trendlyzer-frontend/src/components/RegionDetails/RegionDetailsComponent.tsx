/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import { Box, Typography } from '@mui/material';
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
  country,
  showTable = true,
  title = '',
}: any) => {
  const [trendsList, setTrendsList] = useState<RegionTrendsResponse[]>(defaultState);

  const [options, setOptions] = useState<any | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const { mapTopology } = useContext(CountriesContext);

  const columns: GridColDef[] = [
    {
      field: 'region',
      headerName: 'Region',
      sortingOrder: ['desc', 'asc'],
      width: 270,
      headerClassName: 'searchHeaderTable',
    },
    {
      field: 'searches',
      headerName: 'Searches',
      sortingOrder: ['desc', 'asc'],
      width: 270,
      headerClassName: 'searchHeaderTable',
    },
  ];

  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    if (searchKeyword) {
      setLoading(true);
      setTrendsList(defaultState);
      setTimeout(() => {
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
              mapTopology.features.forEach((feature: any) => {
                newData = {
                  ...newData,
                  [feature.properties.name.replace(/\s+/g, '')]: {
                    ...feature.properties,
                    value: 0,
                  },
                };
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
              setTrendsList(x);
              setRows(rowData);
              setOptions({
                title: {
                  text: title || mapTopology.title,
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
                    mapData: mapTopology,
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
              setLoading(false);
            }
          })
          .catch(() => {});
      }, 500);
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
      {!loading && trendsList.length > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '400px' }}>
          <HighchartsReact constructorType={'mapChart'} highcharts={Highcharts} options={options} />
          {showTable && (
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
              sx={{ ml: 3, mr: 3 }}
              rowSelection={false}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default RegionDetailsComponent;