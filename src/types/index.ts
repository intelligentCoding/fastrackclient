import { CHECK_BOOK_STATUS } from '@/components/dashboard/admin';
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
  token: string;
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
export type CustomerServiceTypeInput = {
  code: string;
  id: string;
};

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
  broker: CustomerServiceTypeInput;
};

export interface Services {
  id: string;
  createdAt: string;
  createdBy: string | null;
  updatedAt: string;
  updatedBy: string | null;
  deletedAt: string | null;
  name: string | null;
  code: string | null;
}

export interface Brokers {
  name: string;
  email: string;
  code: string;
  createdBy: string | null;
  updatedBy: string | null;
  deletedAt: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface LastMileProviders {
  name: string;
  email: string;
  code: string;
  createdBy: string | null;
  updatedBy: string | null;
  deletedAt: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBrokersInput {
  name: string;
  code: string;
  email: string;
}

export interface CreateLastMileProvidersInput {
  name: string;
  code: string;
  email: string;
}

export interface Airports {
  name: string;
  code: string;
  createdBy: string;
  updatedBy: string;
  deletedAt: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Uld {
  UldNumber: string;
  totalPieces: number;
  losePieces: number;
  instructions: string;
  isPure: boolean;
  createdBy: Date | null;
  updatedBy: Date | null;
  deletedAt: Date | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  checkbook: {
    houseAwb: string;
  };
  isPickedUp: boolean;
}

export interface CreateUldInput {
  UldNumber: string;
  totalPieces: number;
  losePieces: number;
  instructions: string;
  isPure: boolean;
  checkbookId: string;
}

export interface CreateCheckbookInput {
  cardName: string | null;
  houseAwb: string | null;
  isc: string | null;
  iscPaidTo: string;
  datePaidIsc: string | null;
  runnerNumber: string;
  airlinePrefix: string | null;
  master: string | null;
  flightCode: string | null;
  flightStatus: string | null;
  arrivalDate: string | null;
  pickedUpDate: string | null;
  bags: number;
  weight: number;
  isExam: false;
  numberOfPiecesExam: string | null;
  isPickupOrderDone: false;
  remarks: string | null;
  label: string | null;
  manifest: {
    fileUpload: {
      afterFileURL: string;
      beforeFileURL: string;
      csvFileUrl: string;
    };
  };
}
export interface Checkbook extends CreateCheckbookInput {
  id: string;
  createdAt: string;
  createdBy: string | null;
  updatedAt: string;
  updatedBy: string | null;
  deletedAt: string | null;
  uld: Uld[] | undefined;
}

export interface CheckbookQueryOption extends QueryOptions {
  checkbookStatus: CHECK_BOOK_STATUS;
  createdFrom: string;
  createdTo: string;
}

export interface CommodityMapping {
  mappedFrom: string;
  mappedTo: string;
  createdBy: string;
  updatedBy: string;
  deletedAt: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
export interface CreateCommodityMappingInput {
  mappedFrom: string;
  mappedTo: string;
}
export interface CommodityMappingQueryOptions extends QueryOptions {
  mappedFrom: string;
  mappedTo: string;
}
export interface BrokersQueryOptions extends QueryOptions {
  name: string;
  code: string;
  email: string;
}

export interface LastMileProviderQueryOptions extends QueryOptions {
  name: string;
  code: string;
  email: string;
}

export interface CreateAirportsInput {
  name: string;
  code: string;
}

export interface AirportsQueryOptions extends QueryOptions {
  name: string;
  code: string;
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

export interface UldQueryOptions extends QueryOptions {
  checkbookId: string;
  udlId: string;
  searchTerm: string;
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

export interface uploadInputFile {
  file: File;
}
export interface getManifestFile {
  uploadedFileName: string;
  afterFileURL: string;
  beforeFileURL: string;
  comments: string;
  createdAt: string;
  createdBy: string;
  deletedAt: string;
  fileKey: string;
  id: string;
  status: string;
  updatedAt: string;
  updatedBy: string;
}
export interface Attachment {
  thumbnail: string;
  original: string;
  id?: string;
  status?: string;
  errors?: any;
  masterAwb?: string;
  code: number;
  afterFileUpload: string;
}

export interface AttachmentInput {
  thumbnail: string;
  original: string;
  id?: string;
}
export interface AttachmentInput {
  thumbnail: string;
  original: string;
  id?: string;
}
export interface Manifest {
  runNumber?: string;
  bags: number;
  weight: string;
  paidTo: string;
  date: string;
  airport: Airports;
  broker: Brokers;
  customer: Customer;
  file: Attachment;
  service: Service;
  createdBy: string | null;
  updatedBy: string | null;
  deletedAt: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
}
interface customerInput {
  name: string;
  value: string;
}

export interface ManifestFormValues {
  paidTo: string;
  airport: string;
  file: Attachment;
  customer: customerInput;
  houseAwb: string;
  bags: number;
}
export interface ManifestFormValuesExpress {
  paidTo: string;
  airport: string;
  file: Attachment;
  customer: customerInput;
  houseAwb: string;
  bags: number;
}

export type Maybe<T> = T | null;

export interface Description {
  id: string;
  descRaw: string;
  descProcessed: string;
}

export interface CustomDescription {
  descriptionId: string;
  descRaw: string;
  userEnteredValue: string;
}
