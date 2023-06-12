import {
  CommodityMapping,
  CreateCommodityMappingInput,
  QueryOptions,
} from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { crudFactory } from './curd-factory';

export const commodityMappingClient = {
  ...crudFactory<CommodityMapping, QueryOptions, CreateCommodityMappingInput>(
    API_ENDPOINTS.COMMODITY_MAPPING,
  ),
};
