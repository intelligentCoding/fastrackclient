import {
  Checkbook,
  CreateCheckbookInput,
  CreateServiceInput,
  QueryOptions,
} from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { crudFactory } from './curd-factory';



export const checkbookClient = {
  ...crudFactory<Checkbook, QueryOptions, CreateCheckbookInput>(
    API_ENDPOINTS.CHECKBOOK
  ),
  // paginated: ({ type, name, ...params }: Partial<CategoryQueryOptions>) => {
  //   return HttpClient.get<CategoryPaginator>(API_ENDPOINTS.SERVICES, {
  //     searchJoin: 'and',
  //     ...params,
  //     search: HttpClient.formatSearchParams({ type, name }),
  //   });
  // },
};
