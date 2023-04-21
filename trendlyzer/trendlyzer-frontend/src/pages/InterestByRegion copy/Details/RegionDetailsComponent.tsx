/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

import { getRegionTrends } from '../../../services/dashboardService';
import { RegionTrendsResponse } from '../../../models/common';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { CountriesContext } from '../../../context/CountriesContext';
import highchartsMap from 'highcharts/modules/map';

highchartsMap(Highcharts);

const RegionDetailsComponent = ({ searchKeyword, startDate, endDate, country }: any) => {
  const [trendsList, setTrendsList] = useState<RegionTrendsResponse[]>([
    {
      geoCode: '',
      geoName: '',
      value: 0,
    },
  ]);

  const [options, setOptions] = useState<any | undefined>();
  const { mapTopology } = useContext(CountriesContext);

  const columns: GridColDef[] = [
    {
      field: 'region',
      headerName: 'Region',
      width: 250,
      sortingOrder: ['desc', 'asc'],
      headerClassName: 'searchHeaderTable',
    },
    {
      field: 'searches',
      headerName: 'Searches',
      width: 150,
      sortingOrder: ['desc', 'asc'],
      headerClassName: 'searchHeaderTable',
    },
  ];

  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    if (searchKeyword) {
      setTimeout(() => {
        getRegionTrends({
          geocode: country,
          keyword: searchKeyword,
          startTime: dayjs(startDate).format('YYYY-MM-DD'),
          endTime: dayjs(endDate).format('YYYY-MM-DD'),
        })
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
                  text: mapTopology.title,
                },
                colorAxis: {
                  min: 0,
                  stops: [
                    [0, '#f72585ff'],
                    [30, '#3f37c9ff'],
                    [60, '#7209b7ff'],
                    [100, '#480ca8ff'],
                  ],
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
            }
          })
          .catch(() => {});
      }, 500);
    }
  }, [searchKeyword, startDate, endDate, country, mapTopology]);

  return (
    <Box sx={{ mt: 4 }}>
      {trendsList.length <= 1 && (
        <p>Start by providing keyword for trends updated based on region</p>
      )}
      {trendsList.length > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '400px' }}>
          <HighchartsReact constructorType={'mapChart'} highcharts={Highcharts} options={options} />
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
            sx={{ ml: 2, mr: 3 }}
            rowSelection={false}
          />
        </Box>
      )}
    </Box>
  );
};

export default RegionDetailsComponent;
