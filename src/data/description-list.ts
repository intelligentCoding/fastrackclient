import { useMutation, useQuery, useQueryClient } from 'react-query';
import { API_ENDPOINTS } from './client/api-endpoints';
import { Description } from '@/types';
import { descriptionClient } from './client/description';
import { toast } from 'react-toastify';

export const useDescriptionList = () => {
  const { data, error, isLoading } = useQuery<Description[], Error>(
    [API_ENDPOINTS.DESCRIPTIONS_ALL],
    ({ queryKey, pageParam }) =>
      descriptionClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    },
  );

  return {
    descriptionList: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useDescriptionsMapMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(descriptionClient.updateDescriptionsMapping, {
    onSuccess: () => {
      toast.success('Descriptions Mapping has been updated');
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.DESCRIPTIONS_ALL);
    },
  });
};
