import { AUTH_CRED } from '@/utils/constants';
import { Routes } from '@/config/routes';
import Cookies from 'js-cookie';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from './client/api-endpoints';
import { Airports, AirportsQueryOptions, GetParams } from '@/types';
import Router from 'next/router';
import { airportsClient } from './client/airports';


export const useAirportsQuery = (options: Partial<AirportsQueryOptions> = {}) => {
  const { data, error, isLoading } = useQuery<Airports[], Error>(
    [API_ENDPOINTS.AIRPORTS, options],
    ({ queryKey, pageParam }) =>
      airportsClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    }
  );

  return {
    airports: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useAirportsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(airportsClient.create, {
    onSuccess: () => {
      Router.push(Routes.airports);
      toast.success("Airport has been created");
    },
    // Always refetch after error or success:å
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.AIRPORTS);
    },
  });
};

export const useUpdateAirportsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(airportsClient.update, {
    onSuccess: () => {
      Router.push(Routes.airports);
      toast.success("Airport has been updated");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.AIRPORTS);
    },
  });
};


export const useAirportQuery = ({ id }: GetParams) => {
  const { data, error, isLoading } = useQuery<Airports, Error>(
    [API_ENDPOINTS.AIRPORTS, { id }],
    () => airportsClient.get({ id })
  );

  return {
    airport: data,
    error,
    isLoading,
  };
};

export const useDeleteAirportMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(airportsClient.delete, {
    onSuccess: () => {
      toast.success("Successfully deleted the airport");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.AIRPORTS);
    },
  });
};




