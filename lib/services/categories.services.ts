import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { CategoriesResponse } from '../interfaces/categories.interface';

function useCategories() {
  const { data, error, isLoading, mutate } = useSWR<CategoriesResponse>(
    '/publications-types',
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

function useCategoriesId(category_id: any) {
  const { data, error, isLoading, mutate } = useSWR<CategoriesResponse>(
    category_id ? `/publications-types/${category_id}` : null,
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

export { useCategories, useCategoriesId };
