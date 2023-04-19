import {
    Manifest,
    ManifestFormValues,
    QueryOptions,
  } from '@/types';
  import { API_ENDPOINTS } from './api-endpoints';
  import { crudFactory } from './curd-factory';
  
  
  
  export const uploadManifestClient = {
    ...crudFactory<Manifest, QueryOptions, ManifestFormValues>(
      API_ENDPOINTS.MANIFEST
    ),
    
  };
  