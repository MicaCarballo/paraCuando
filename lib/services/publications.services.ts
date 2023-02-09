import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { PublicationsResponse } from '../interfaces/publications.interface';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR<PublicationsResponse>(
    'https://paracuando-team1.academlo.tech/api/v1/publications?size=100',
    fetcher
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

export { usePublications };
