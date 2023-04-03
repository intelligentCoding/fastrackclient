import { AUTH_CRED } from '@/utils/constants';
import { Routes } from '@/config/routes';
import Cookies from 'js-cookie';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from './client/api-endpoints';
import { userClient } from './client/user';
import { serviceClient } from './client/services';
import { GetParams, ServiceQueryOptions, Services } from '@/types';
import Router from 'next/router';
import { Service } from 'next-seo/lib/types';


export const useServicesQuery = (options: Partial<ServiceQueryOptions> = {}) => {
  const { data, error, isLoading } = useQuery<Services[], Error>(
    [API_ENDPOINTS.SERVICES, options],
    ({ queryKey, pageParam }) =>
      serviceClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    }
  );

  return {
    services: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useServiceMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(serviceClient.create, {
    onSuccess: () => {
      Router.push(Routes.services);
      toast.success("Service has been created");
    },
    // Always refetch after error or success:å
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.SERVICES);
    },
  });
};

export const useUpdateServiceMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(serviceClient.update, {
    onSuccess: () => {
      Router.push(Routes.services);
      toast.success("Service has been updated");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.SERVICES);
    },
  });
};


export const useServiceQuery = ({ id }: GetParams) => {
  const { data, error, isLoading } = useQuery<Services, Error>(
    [API_ENDPOINTS.SERVICES, { id }],
    () => serviceClient.get({ id })
  );

  return {
    service: data,
    error,
    isLoading,
  };
};

export const useDeleteServiceMutation = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation(serviceClient.delete, {
    onSuccess: () => {
      toast.success("Successfully deleted the service");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.SERVICES);
    },
  });
};




