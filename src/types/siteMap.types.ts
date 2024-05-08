export type SiteMapEntry = {
  path: string;
  title: string;
  description: string;
  lastModified: string;
  image: string;
  imagealt: string;
  navtitle: string;
  buttontext: string;
};

export type Sitemap = SiteMapEntry[];

export interface SheetsResponse<T> {
  type: string;
  data: T[];
  offset: number;
  total: number;
}

export interface Placeholder {
  Key: string;
  Text: string;
}
