
import { API_ENDPOINTS } from './client/api-endpoints';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import {uploadFileClient} from './client/upload-file'




export const useFileUploadMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(uploadFileClient.upload, {
      onSuccess: () => {
        toast.success("File has been uploaded");
      },
      // Always refetch after error or success:å
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.FILE_UPLOAD);
      },
    });
  };