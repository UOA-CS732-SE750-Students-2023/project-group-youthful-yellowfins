export interface ICountry {
  code: string;
  name: string;
}

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
}
export interface WrapperProps {
  title: string;
  trafficCount: object;
  image: IImage;
  articles: IArticle[];
  id: number;
}

export interface TrendsListResponse {
  date: string;
  formattedDate: string;
  trendingStories: WrapperProps[];
}
