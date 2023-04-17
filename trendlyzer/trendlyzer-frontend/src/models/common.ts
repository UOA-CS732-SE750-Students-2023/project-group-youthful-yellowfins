export interface ICountryResponse {
  cca2: string;
  name: { common: string };
}

export interface IImage {
  imageUrl: string;
  newsUrl: string;
  source: string;
}

export interface IArticle {
  title: string;
  timeAgo: string;
  source: string;
  image: IImage;
  url: string;
  snippet: string;
  articleTitle?: string;
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
}
