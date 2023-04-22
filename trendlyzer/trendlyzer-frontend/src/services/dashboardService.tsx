import http from '../config/httpCommon';

export const getAllCountriesCode = async () => {
  return await http.get<any>('/Trends/getCountryCodes');
};

export const getDailyTrends = async (queryParams: any) => {
  return await http.get<any>('Trends/getTrendsByDate', { params: queryParams });
};

export const getRegionTrends = async (queryParams: any) => {
  return await http.post<any>('Trends/getTrendByRegion', queryParams);
};

export const getGeoJSON = async (geoCode: string) => {
  return await http.get<any>(
    `https://code.highcharts.com/mapdata/countries/${geoCode}/${geoCode}-all.geo.json`,
  );
};
