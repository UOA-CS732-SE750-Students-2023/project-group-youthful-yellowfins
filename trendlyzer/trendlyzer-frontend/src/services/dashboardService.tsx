import http from '../config/httpCommon';

export const getAllCountriesCode = async () => {
  return await http.get<any>('https://restcountries.com/v3.1/all');
};

export const getDailyTrends = async (queryParams: any) => {
  return await http.get<any>('Trends/getTrendsByDate', { params: queryParams });
};
