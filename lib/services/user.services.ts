import useSWR from 'swr';
import axios from '../helpers/axios.helpers';
import { fetcher } from '../helpers/fetcher';
import { PublicationsResponse } from '../interfaces/publications.interface';
import {
  MyUserResponse,
  UserInfoResponse,
} from '../interfaces/user-info.interface';
import { UserVotesResponse } from '../interfaces/votes.interface';

const configSWR = { shouldRetryOnError: false, revalidateOnFocus: false };

function useUserInfo() {
  const { data, error, isLoading, mutate } = useSWR<UserInfoResponse>(
    '/users/user-info',
    fetcher,
    configSWR
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function useMyUserInfo(user_id: any) {
  const { data, error, isLoading, mutate } = useSWR<MyUserResponse>(
    `/users/${user_id}`,
    fetcher,
    configSWR
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
  idPublicationType: string;
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
    user_id ? `/users/${user_id}/votes` : null,
    fetcher
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function useUserPublications(user_id: any) {
  const { data, error, isLoading, mutate } = useSWR<PublicationsResponse>(
    user_id ? `/users/${user_id}/publications` : null,
    fetcher
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

export {
  useUserInfo,
  useMyUserInfo,
  createPublication,
  useUserVotes,
  createVote,
  useUserPublications,
};
