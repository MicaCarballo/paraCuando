// Generated by https://quicktype.io

export interface StateResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  CurrentPage: number;
  results: Result[];
}

export interface Result {
  id: number;
  country_id: number;
  name: string;
}