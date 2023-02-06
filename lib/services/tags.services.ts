import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { TagsResponse } from '../interfaces/tags.interface';

function useTags() {
  const { data, error, isLoading, mutate } = useSWR<TagsResponse>(
    'https://paracuando-team1.academlo.tech/api/v1/tags',
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

export { useTags };
