import { AUTH_CRED } from '@/utils/constants';
import { Routes } from '@/config/routes';
import Cookies from 'js-cookie';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from './client/api-endpoints';
import {  Brokers, BrokersQueryOptions, GetParams } from '@/types';
import Router from 'next/router';
import { brokersClient } from './client/broker';


export const useBrokersQuery = (options: Partial<BrokersQueryOptions> = {}) => {
  const { data, error, isLoading } = useQuery<Brokers[], Error>(
    [API_ENDPOINTS.AIRPORTS, options],
    ({ queryKey, pageParam }) =>
      brokersClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    }
  );

  return {
    brokers: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useBrokersMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(brokersClient.create, {
    onSuccess: () => {
      Router.push(Routes.brokers);
      toast.success("Airport has been created");
    },
    // Always refetch after error or success:å
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.BROKER);
    },
  });
};

export const useUpdateBrokersMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(brokersClient.update, {
    onSuccess: () => {
      Router.push(Routes.brokers);
      toast.success("Airport has been updated");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.BROKER);
    },
  });
};


export const useBrokerQuery = ({ id }: GetParams) => {
  const { data, error, isLoading } = useQuery<Brokers, Error>(
    [API_ENDPOINTS.BROKER, { id }],
    () => brokersClient.get({ id })
  );

  return {
    broker: data,
    error,
    isLoading,
  };
};

export const useDeleteBrokerMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(brokersClient.delete, {
    onSuccess: () => {
      toast.success("Successfully deleted the airport");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.BROKER);
    },
  });
};




