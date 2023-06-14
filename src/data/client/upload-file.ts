import { CommodityMapping, uploadInputFile, QueryOptions } from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { crudFactory } from './curd-factory';

export const uploadFileClient = {
  ...crudFactory<File, QueryOptions, uploadInputFile>(
    API_ENDPOINTS.FILE_UPLOAD,
  ),
};
