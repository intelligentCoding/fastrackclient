import { AUTH_CRED } from '@/utils/constants';
import { Routes } from '@/config/routes';
import Cookies from 'js-cookie';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from './client/api-endpoints';
import {
  CommodityMapping,
  CommodityMappingQueryOptions,
  GetParams,
} from '@/types';
import Router from 'next/router';
import { commodityMappingClient } from './client/commodity-mapping';

export const useCommodityMappingQuery = (
  options: Partial<CommodityMappingQueryOptions> = {},
) => {
  const { data, error, isLoading } = useQuery<CommodityMapping[], Error>(
    [API_ENDPOINTS.COMMODITY_MAPPING, options],
    ({ queryKey, pageParam }) =>
      commodityMappingClient.all(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    },
  );

  return {
    commodityMap: data ?? [],
    error,
    loading: isLoading,
  };
};

export const useCommodityMapMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(commodityMappingClient.create, {
    onSuccess: () => {
      Router.push(Routes.commodity_mapping);
      toast.success('Map has been created');
    },
    // Always refetch after error or success:å
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.COMMODITY_MAPPING);
    },
  });
};

export const useUpdateCommodityMapMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(commodityMappingClient.update, {
    onSuccess: () => {
      Router.push(Routes.commodity_mapping);
      toast.success('Map has been updated');
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.COMMODITY_MAPPING);
    },
  });
};

export const useCommodityMapQuery = ({ id }: GetParams) => {
  const { data, error, isLoading } = useQuery<CommodityMapping, Error>(
    [API_ENDPOINTS.COMMODITY_MAPPING, { id }],
    () => commodityMappingClient.get({ id }),
  );

  return {
    commodityMap: data,
    error,
    isLoading,
  };
};

export const useDeleteCommodityMapMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(commodityMappingClient.delete, {
    onSuccess: () => {
      toast.success('Successfully deleted the map');
    },
    onError: () => {
      toast.error('Error deleting map');
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.COMMODITY_MAPPING);
    },
  });
};
