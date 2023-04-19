import { useMutation, useQueryClient } from "react-query";
import { uploadManifestClient } from "./client/manifest-data";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "./client/api-endpoints";


export const useManifestDataMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(uploadManifestClient.create, {
      onSuccess: () => {
        toast.success("Table has been created");
      },
      // Always refetch after error or success:å
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.MANIFEST);
      },
    });
  };