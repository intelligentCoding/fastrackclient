import {
    Brokers,
    CreateBrokersInput,
    CreateUsersInput,
    QueryOptions,
    RoleInput,
    Roles,
  } from '@/types';
  import { API_ENDPOINTS } from './api-endpoints';
  import { crudFactory } from './curd-factory';
  
  
  
  export const RolesClient = {
    ...crudFactory<Roles, QueryOptions, RoleInput>(
      API_ENDPOINTS.ROLE
    ),
    // paginated: ({ type, name, ...params }: Partial<CategoryQueryOptions>) => {
    //   return HttpClient.get<CategoryPaginator>(API_ENDPOINTS.SERVICES, {
    //     searchJoin: 'and',
    //     ...params,
    //     search: HttpClient.formatSearchParams({ type, name }),
    //   });
    // },
  };
  