import { useMutation, useQueryClient, useQuery } from 'react-query';
import { API_ENDPOINTS } from '@/data/client/api-endpoints';
import { uploadClient, getFile } from '@/data/client/upload';
import { getManifestFile } from '@/types';

export const useUploadMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (input: any) => {
      return uploadClient.upload(input);
    },
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.FILE_UPLOAD);
      },
    },
  );
};
export const useManifestListQuery = () => {
  const { data, error, isLoading } = useQuery<getManifestFile[], Error>(
    [API_ENDPOINTS.FILE_UPLOAD],
    () => getFile.getList(),
    {
      keepPreviousData: true,
    },
  );

  return {
    manifestList: data ?? [],
    error,
    loading: isLoading,
  };
};
