
import {
    LastMileProviders,
    CreateLastMileProvidersInput,
    QueryOptions,
  } from '@/types';
  import { API_ENDPOINTS } from './api-endpoints';
  import { crudFactory } from './curd-factory';
  
  
  
  export const lastMileProviderClient = {
    ...crudFactory<LastMileProviders, QueryOptions, CreateLastMileProvidersInput>(
      API_ENDPOINTS.LASTMILEPROVIDER
    ),
    // paginated: ({ type, name, ...params }: Partial<CategoryQueryOptions>) => {
    //   return HttpClient.get<CategoryPaginator>(API_ENDPOINTS.SERVICES, {
    //     searchJoin: 'and',
    //     ...params,
    //     search: HttpClient.formatSearchParams({ type, name }),
    //   });
    // },
  };
  