import http from '../config/httpCommon';

export const getAllCountriesCode = async () => {
  return await http.get<any>('https://restcountries.com/v3.1/all');
};
