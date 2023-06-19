import {
    Brokers,
    CreateBrokersInput,
    CreateUsersInput,
    QueryOptions,
    Users,
  } from '@/types';
  import { API_ENDPOINTS } from './api-endpoints';
  import { crudFactory } from './curd-factory';
  
  
  
  export const usersClient = {
    ...crudFactory<Users, QueryOptions, CreateUsersInput>(
      API_ENDPOINTS.AUTH
    ),
    // paginated: ({ type, name, ...params }: Partial<CategoryQueryOptions>) => {
    //   return HttpClient.get<CategoryPaginator>(API_ENDPOINTS.SERVICES, {
    //     searchJoin: 'and',
    //     ...params,
    //     search: HttpClient.formatSearchParams({ type, name }),
    //   });
    // },
  };
  