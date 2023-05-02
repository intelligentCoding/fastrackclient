import { useMutation, useQueryClient } from "react-query";
import { uploadManifestClient } from "./client/manifest-data";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "./client/api-endpoints";
import Router from 'next/router';
import { Routes } from "@/config/routes";



export const useManifestDataMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(uploadManifestClient.create, {
      onSuccess: () => {
        Router.push(Routes.dashboard);
        toast.success("Table has been created");
      },
      // Always refetch after error or success:å
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.MANIFEST);
      },
    });
  };