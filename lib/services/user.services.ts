import useSWR from 'swr';
import axios from '../helpers/axios.helpers';
import { fetcher } from '../helpers/fetcher';
import { UserInfoResponse } from '../interfaces/user-info.interface';
import { UserVotesResponse } from '../interfaces/votes.interface';

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

function createVote(id: any) {
  return axios.post(`/publications/${id}/vote`);
}

function useUserVotes(user_id: any) {
  const { data, error, isLoading, mutate } = useSWR<UserVotesResponse>(
    `/users/${user_id}/votes`,
    fetcher
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

export { useUserInfo, createPublication, useUserVotes, createVote };
