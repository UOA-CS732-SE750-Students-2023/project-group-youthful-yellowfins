/**
 * Author: Ankita Mohata
 *
 * This file contains the data models for variables/functions types.
 */
export interface ICountryResponse {
  cca2: string;
  name: { common: string };
}

export interface IImage {
  imageUrl: string;
  newsUrl: string;
  source: string;
  imgUrl: string;
}

export interface IArticle {
  title: string;
  timeAgo: string;
  source: string;
  image: IImage;
  url: string;
  snippet: string;
  articleTitle?: string;
  time?: string;
}

export interface IRealTimeArticle {
  title?: string;
  articleTitle: string;
  snippet: string;
  source: string;
  time: string;
  url: string;
  timeAgo?: string;
}
export interface WrapperProps {
  title: string;
  trafficCount?: string;
  image: IImage;
  articles: IArticle[] | IRealTimeArticle[];
  id: number;
  entityNames?: [];
  handleMoreDetails: (value: any) => void;
}

export interface TrendsListResponse {
  date: string;
  formattedDate: string;
  trendingStories: WrapperProps[];
}

export interface RealTimeListResponse {
  articles: IRealTimeArticle[];
  entityNames: [];
  image: IImage;
  title: string;
  id: number;
  handleMoreDetails: (value: any) => void;
}

export interface RegionTrendsResponse {
  geoCode: string;
  geoName: string;
  value: number;
}

export interface IChartValues {
  positive: number;
  neutral: number;
  negative: number;
  totalTweetsAnalysed: number;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
