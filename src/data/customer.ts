import { AUTH_CRED } from '@/utils/constants';
import { Routes } from '@/config/routes';
import Cookies from 'js-cookie';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from './client/api-endpoints';
import { userClient } from './client/user';
import { Customer, CustomerQueryOptions, GetParams} from '@/types';
import Router from 'next/router';
import { customerClient } from './client/customers';


export const useCustomersQuery = (options: Partial<CustomerQueryOptions> = {}) => {
  const { data, error, isLoading } = useQuery<Customer[], Error>(
    [API_ENDPOINTS.CUSTOMER, options],
    ({ queryKey, pageParam }) =>
      customerClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    }
  );

  return {
    customers: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useCustomerMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(customerClient.create, {
    onSuccess: () => {
      Router.push(Routes.customers);
      toast.success("Customer has been created");
    },
    // Always refetch after error or success:å
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.CUSTOMER);
    },
  });
};

export const useUpdateCustomerMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(customerClient.update, {
    onSuccess: () => {
      Router.push(Routes.customers);
      toast.success("Customer has been updated");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.CUSTOMER);
    },
  });
};


export const useCustomerQuery = ({ id }: GetParams) => {
  const { data, error, isLoading } = useQuery<Customer, Error>(
    [API_ENDPOINTS.CUSTOMER, { id }],
    () => customerClient.get({ id })
  );

  return {
    customer: data,
    error,
    isLoading,
  };
};

export const useDeleteCustomerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(customerClient.delete, {
    onSuccess: () => {
      toast.success("Successfully deleted the customer");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.CUSTOMER);
    },
  });
};




