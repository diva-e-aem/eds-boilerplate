export interface SheetsResponse<T> {
  type: string;
  data: T[];
  offset: number;
  total: number;
}
