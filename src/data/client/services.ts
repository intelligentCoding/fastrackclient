import {
  CreateServiceInput,
  QueryOptions,
  Services,
} from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { crudFactory } from './curd-factory';



export const serviceClient = {
  ...crudFactory<Services, QueryOptions, CreateServiceInput>(
    API_ENDPOINTS.SERVICES
  ),
  // paginated: ({ type, name, ...params }: Partial<CategoryQueryOptions>) => {
  //   return HttpClient.get<CategoryPaginator>(API_ENDPOINTS.SERVICES, {
  //     searchJoin: 'and',
  //     ...params,
  //     search: HttpClient.formatSearchParams({ type, name }),
  //   });
  // },
};
