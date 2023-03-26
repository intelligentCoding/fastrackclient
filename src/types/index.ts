import type { NextPage } from 'next';
import { Service } from 'next-seo/lib/types';
import { string } from 'yup';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authorization?: boolean;
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export enum Permission {
  Admin = 'ADMIN',
  Office = 'OFFICE',
  View = 'VIEW',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  id: string;
  email: string;
  roles: string[];
  token: string
}


export interface User {
  id: string;
  name: string;
  is_active: boolean;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Customer { 
  name: string;
  email: string;
  clearanceFee: number;
  airlineFee: number;
  airwayBillPerPcs: number;
  fteHandlingFee: number;
  cfsRecoveryCharges: number;
  fteMinWeight: number;
  fteMinCharge: number;
  cfsMinWeight: number;
  cfsMinCharge: number;
  service: Partial<Service>;
  createdBy: string | null;
  updatedBy: string | null;
  deletedAt: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
}
export type CustomerServiceTypeInput  = {
  code: string;
  id: string;
}

export type CustomerFormValues = {
  name: string;
  email: string;
  clearanceFee: number;
  airlineFee: number;
  airwayBillPerPcs: number;
  fteHandlingFee: number;
  cfsRecoveryCharges: number;
  fteMinWeight: number;
  fteMinCharge: number;
  cfsMinWeight: number;
  cfsMinCharge: number;
  service: CustomerServiceTypeInput;
};

export interface Services {
  id: string;
  createdAt: string;
  createdBy: string | null;
  updatedAt: string;
  updatedBy: string | null;
  deletedAt: string | null;
  name: string | null
  code: string | null;
}


export interface UpdateUser {
  name?: string;
}


//needed when implementing pagination
export interface PaginatorInfo<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface QueryOptions {
  language: string;
  limit?: number;
  page?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
}

export interface GetParams {
  id: string;
}

export interface CreateServiceInput {
  name: string;
  code: string;
}

export interface CreateCustomerInput {
  name: string;
  email: string;
  clearanceFee: number;
  airlineFee: number;
  airwayBillPerPcs: number;
  fteHandlingFee: number;
  cfsRecoveryCharges: number;
  fteMinWeight: number;
  fteMinCharge: number;
  cfsMinWeight: number;
  cfsMinCharge: number;
  service: CustomerServiceTypeInput;  

}


export interface QueryOptions {
  language: string;
  limit?: number;
  page?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
}

export interface ServiceQueryOptions extends QueryOptions {
  code: string;
  name: string;
}
export interface CustomerQueryOptions extends QueryOptions {
  name: string;
  email: string;
  clearanceFee: number;
  airlineFee: number;
  airwayBillPerPcs: number;
  fteHandlingFee: number;
  cfsRecoveryCharges: number;
  fteMinWeight: number;
  fteMinCharge: number;
  cfsMinWeight: number;
  cfsMinCharge: number;
  serviceId: string;  
  createdBy: string | null;
  updatedBy: string | null;
  deletedAt: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
}

