/**
 * Author: Ankita Mohata
 *
 * Contains methods to call APIs
 *
 */

import http from '../config/httpCommon';

// Method to call API to fetch the list of countries
export const getAllCountriesCode = async () => {
  return await http.get<any>('/Trends/getCountryCodes');
};

// Method to call API to fetch the list of daily trends
export const getDailyTrends = async (queryParams: any) => {
  return await http.get<any>('Trends/getTrendsByDate', { params: queryParams });
};

// Method to call API to fetch the regon based trends data
export const getRegionTrends = async (queryParams: any) => {
  return await http.post<any>('Trends/getTrendByRegion', queryParams);
};

// Method to call API to fetch the map topology of specific country from highcharts
export const getGeoJSON = async (geoCode: string) => {
  return await http.get<any>(
    `https://code.highcharts.com/mapdata/countries/${geoCode}/${geoCode}-all.geo.json`,
  );
};

// Method to call API to fetch the custom map topology for china, hongkong and macau
export const customChinaData = async () => {
  return await http.get<any>(
    'https://code.highcharts.com/mapdata/countries/cn/custom/cn-all-sar.geo.json',
  );
};

// Method to call API to fetch the world map topology from highcharts
export const getWorldGeoJSON = async () => {
  return await http.get<any>('https://code.highcharts.com/mapdata/custom/world.geo.json');
};
