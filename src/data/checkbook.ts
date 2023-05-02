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
import { Checkbook, CheckbookQueryOption, GetParams, ServiceQueryOptions, Services } from '@/types';
import Router from 'next/router';
import { Service } from 'next-seo/lib/types';
import { checkbookClient } from './client/checkbook';


export const useCheckbookQuery = (options: Partial<CheckbookQueryOption> = {}) => {
  const { data, error, isLoading } = useQuery<Checkbook[], Error>(
    [API_ENDPOINTS.CHECKBOOK, options],
    ({ queryKey, pageParam }) =>
      checkbookClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    }
  );

  return {
    checkbooks: data ?? [],
    error,
    loading: isLoading,
  };
};

// export const useServiceMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation(serviceClient.create, {
//     onSuccess: () => {
//       Router.push(Routes.services);
//       toast.success("Service has been created");
//     },
//     // Always refetch after error or success:å
//     onSettled: () => {
//       queryClient.invalidateQueries(API_ENDPOINTS.SERVICES);
//     },
//   });
// };

export const useUpdateCheckbookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(checkbookClient.update, {
    onSuccess: () => {
      // Router.push(Routes.services);
      toast.success("Service has been updated");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.CHECKBOOK);
    },
  });
};

export const useDeleteCheckbookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(checkbookClient.delete, {
    onSuccess: () => {
      toast.success("Successfully deleted the checkbook");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.CHECKBOOK);
    },
  });
};




