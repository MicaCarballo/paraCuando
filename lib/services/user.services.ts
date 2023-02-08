import useSWR from 'swr';
import axios from '../helpers/axios.helpers';
import { fetcher } from '../helpers/fetcher';
import { UserInfoResponse } from '../interfaces/user-info.interface';

function useUserInfo() {
  const { data, error, isLoading, mutate } = useSWR<UserInfoResponse>(
    '/users/user-info',
    fetcher
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function createPublication(data: {
  title: string;
  tags: string;
  publication_type_id: string;
  description: string;
  urlShare: string;
}) {
  return axios.post('/publications', data);
}

export { useUserInfo, createPublication };
