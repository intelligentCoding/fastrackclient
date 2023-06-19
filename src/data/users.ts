import { AUTH_CRED } from '@/utils/constants';
import { Routes } from '@/config/routes';
import Cookies from 'js-cookie';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from './client/api-endpoints';
import { Brokers, BrokersQueryOptions, GetParams, Users, UsersQueryOptions } from '@/types';
import Router from 'next/router';
import { brokersClient } from './client/broker';
import { userClient } from './client/user';
import { usersClient } from './client/users';


export const useUsersQuery = (options: Partial<UsersQueryOptions> = {}) => {
  const { data, error, isLoading } = useQuery<Users[], Error>(
    [API_ENDPOINTS.AUTH, options],
    ({ queryKey, pageParam }) =>
      usersClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    }
  );

  return {
    users: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useUsersMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(usersClient.create, {
    onSuccess: () => {
      Router.push(Routes.users);
      toast.success("User has been created");
    },
    onError: (error: any) => {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      // toast.error(error.data.message)
    },
    // Always refetch after error or success:å
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.BROKER);
    },
  });
};

export const useUpdateUsersMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(usersClient.update, {
    onSuccess: () => {
      Router.push(Routes.users);
      toast.success("Airport has been updated");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.BROKER);
    },
  });
};


export const useUserQuery = ({ id }: GetParams) => {
  const { data, error, isLoading } = useQuery<Users, Error>(
    [API_ENDPOINTS.AUTH, { id }],
    () => usersClient.get({ id })
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




