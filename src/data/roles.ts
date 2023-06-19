import { useQuery } from 'react-query';
import { API_ENDPOINTS } from './client/api-endpoints';
import { Roles } from '@/types';
import { RolesClient } from './client/roles';


export const useRolesQuery = (options: Partial<any> = {}) => {
  const { data, error, isLoading } = useQuery<Roles[], Error>(
    [API_ENDPOINTS.ROLE, options],
    ({ queryKey, pageParam }) =>
    RolesClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    }
  );

  return {
    Roles: data ?? [],
    error,
    loading: isLoading,
  };
};




