// Generated by https://quicktype.io

export interface PublicationsResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  CurrentPage: number;
  results: Publication[];
}

export interface Publication {
  id: string;
  profile_id: string;
  title: string;
  description: string;
  content: string;
  picture: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  City: City;
  publication_type_id: string;
  tags: Tag[];
}

export interface City {
  id: string;
  name: string;
  State: State;
}

export interface State {
  id: string;
  name: string;
  Country: Tag;
}

export interface Tag {
  id: string;
  name: string;
}

export interface PublicationTypeID {
  id: string;
  name: string;
  description: string;
}
