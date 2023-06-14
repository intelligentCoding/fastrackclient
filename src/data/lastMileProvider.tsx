import { AUTH_CRED } from '@/utils/constants';
import { Routes } from '@/config/routes';
import Cookies from 'js-cookie';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from './client/api-endpoints';
import {
  LastMileProviders,
  LastMileProviderQueryOptions,
  GetParams,
} from '@/types';
import Router from 'next/router';
import { lastMileProviderClient } from './client/last-mile-provider';

export const useLastMileProvidersQuery = (
  options: Partial<LastMileProviderQueryOptions> = {},
) => {
  const { data, error, isLoading } = useQuery<LastMileProviders[], Error>(
    [API_ENDPOINTS.LASTMILEPROVIDER, options],
    ({ queryKey, pageParam }) =>
      lastMileProviderClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    },
  );

  return {
    lastMileProviders: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useLastMileProviderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(lastMileProviderClient.create, {
    onSuccess: () => {
      Router.push(Routes.lastmileprovider);
      toast.success('Last mile provider has been created');
    },
    // Always refetch after error or success:å
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.LASTMILEPROVIDER);
    },
  });
};

export const useUpdateLastMileProviderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(lastMileProviderClient.update, {
    onSuccess: () => {
      Router.push(Routes.lastmileprovider);
      toast.success('Last mile provider has been updated');
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.LASTMILEPROVIDER);
    },
    onError: (error) => {
      toast.error('Thre was an error updating last mile provider');
    },
  });
};

export const useLastMileProviderQuery = ({ id }: GetParams) => {
  const { data, error, isLoading } = useQuery<LastMileProviders, Error>(
    [API_ENDPOINTS.LASTMILEPROVIDER, { id }],
    () => lastMileProviderClient.get({ id }),
  );

  return {
    lastMileProvider: data,
    error,
    isLoading,
  };
};

export const useDeleteLastMileProviderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(lastMileProviderClient.delete, {
    onSuccess: () => {
      toast.success('Successfully deleted the last mile provider');
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.LASTMILEPROVIDER);
    },
    onError: (error) => {
      toast.error('Thre was an error updating last mile provider');
    },
  });
};
