// Generated by https://quicktype.io

export interface UserInfoResponse {
  results: Results;
}

export interface Results {
  id: string;
  email: string;
  username: string;
  profile: Profile[];
}

export interface Profile {
  id: string;
  image_url: string;
  code_phone: string;
  phone: string;
  role: Role;
}

export interface Role {
  id: string;
  name: string;
}
