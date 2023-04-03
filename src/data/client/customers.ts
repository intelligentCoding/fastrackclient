import {
  CreateCustomerInput,
  Customer,
  QueryOptions,
} from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { crudFactory } from './curd-factory';



export const customerClient = {
  ...crudFactory<Customer, QueryOptions, CreateCustomerInput>(
    API_ENDPOINTS.CUSTOMER
  ),
  // paginated: ({ type, name, ...params }: Partial<CategoryQueryOptions>) => {
  //   return HttpClient.get<CategoryPaginator>(API_ENDPOINTS.SERVICES, {
  //     searchJoin: 'and',
  //     ...params,
  //     search: HttpClient.formatSearchParams({ type, name }),
  //   });
  // },
};
