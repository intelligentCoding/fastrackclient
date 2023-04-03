import {
  Airports,
  CreateAirportsInput,
  QueryOptions,
} from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { crudFactory } from './curd-factory';



export const airportsClient = {
  ...crudFactory<Airports, QueryOptions, CreateAirportsInput>(
    API_ENDPOINTS.AIRPORTS
  ),
  // paginated: ({ type, name, ...params }: Partial<CategoryQueryOptions>) => {
  //   return HttpClient.get<CategoryPaginator>(API_ENDPOINTS.SERVICES, {
  //     searchJoin: 'and',
  //     ...params,
  //     search: HttpClient.formatSearchParams({ type, name }),
  //   });
  // },
};
