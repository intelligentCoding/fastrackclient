import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from './client/api-endpoints';
import { GetParams, Services, Uld, UldQueryOptions } from '@/types';
import Router from 'next/router';
import { uldClient } from './client/uld';

export const useUldQuery = (options: Partial<UldQueryOptions> = {}) => {
  const { data, error, isLoading, refetch } = useQuery<Uld[], Error>(
    [API_ENDPOINTS.SERVICES, options],
    ({ queryKey, pageParam }) =>
      uldClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      // keepPreviousData: true,
      enabled: false,
      refetchOnMount: true,
    },
  );

  return {
    ulds: data ?? [],
    error,
    loading: isLoading,
    refetch,
  };
};
export const useUldQueryOnly = (options: Partial<UldQueryOptions> = {}) => {
  const { data, error, isLoading, refetch } = useQuery<Uld[], Error>(
    [API_ENDPOINTS.SERVICES, options],
    ({ queryKey, pageParam }) =>
      uldClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    },
  );

  return {
    ulds: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useUldMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(uldClient.create, {
    onSuccess: () => {
      Router.push(Routes.dashboard);
      toast.success('Uld has been created');
    },
    // Always refetch after error or success:å
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.ULD);
    },
  });
};

export const useUpdateUldMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(uldClient.update, {
    onSuccess: () => {
      Router.push(Routes.dashboard);
      toast.success('Uld has been updated');
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.ULD);
    },
  });
};

// export const useUldQuery = ({ id }: GetParams) => {
//   const { data, error, isLoading } = useQuery<Uld, Error>(
//     [API_ENDPOINTS.ULD, { id }],
//     () => uldClient.get({ id })
//   );

//   return {
//     ulds: data,
//     error,
//     loading: isLoading,
//   };
// };

export const useDeleteUldMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(uldClient.delete, {
    onSuccess: () => {
      toast.success('Successfully deleted the ULD');
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.ULD);
    },
  });
};
