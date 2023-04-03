import camelCaseKeys from 'camelcase-keys';
import { PaginatorInfo } from '@/types';

export const mapPaginatorData = (
  obj: PaginatorInfo<any> | undefined
): any => {
  if (!obj) return null;
  const { data, ...formattedValues } = camelCaseKeys(obj);
  return {
    ...formattedValues,
    hasMorePages: formattedValues.lastPage !== formattedValues.currentPage,
  };
};
