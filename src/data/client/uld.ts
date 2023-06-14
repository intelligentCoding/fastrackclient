import { CreateUldInput, QueryOptions, Uld } from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { crudFactory } from './curd-factory';

export const uldClient = {
  ...crudFactory<Uld, QueryOptions, CreateUldInput>(API_ENDPOINTS.ULD),
  // paginated: ({ type, name, ...params }: Partial<CategoryQueryOptions>) => {
  //   return HttpClient.get<CategoryPaginator>(API_ENDPOINTS.SERVICES, {
  //     searchJoin: 'and',
  //     ...params,
  //     search: HttpClient.formatSearchParams({ type, name }),
  //   });
  // },
};
