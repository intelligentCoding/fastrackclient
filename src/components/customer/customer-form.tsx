import Input from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import Card from '@/components/common/card';
import Description from '@/components/ui/description';
import { useRouter } from 'next/router';

import { yupResolver } from '@hookform/resolvers/yup';

import { serviceValidationSchema } from './cusotmer-validation-schema';
import { Customer, CustomerFormValues } from '@/types';
import {
  useCustomerMutation,
  useUpdateCustomerMutation,
} from '@/data/customer';
import ServiceInput from '../common/ServiceInput';
import BrokerInput from '../common/BrokerInput';

const defaultValues = {
  name: '',
  email: '',
  clearanceFee: 0,
  airlineFee: 0,
  airwayBillPerPcs: 0,
  fteHandlingFee: 0,
  cfsRecoveryCharges: 0,
  fteMinWeight: 0,
  fteMinCharge: 0,
  cfsMinWeight: 0,
  cfsMinCharge: 0,
  service: {
    code: '',
    id: '',
  },
  broker: {
    code: '',
    id: '',
  },
};

type IProps = {
  initialValues?: Partial<Customer> | undefined;
};
export default function CreateOrUpdateCustomers({ initialValues }: IProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CustomerFormValues>({
    // shouldUnregister: true,
    //@// eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    defaultValues: initialValues ? initialValues : defaultValues,
    resolver: yupResolver(serviceValidationSchema),
  });
  const { mutate: createCustomer, isLoading: creating } = useCustomerMutation();
  const { mutate: updateCustomer, isLoading: updating } =
    useUpdateCustomerMutation();

  const onSubmit = async (values: CustomerFormValues) => {
    if (!initialValues) {
      createCustomer({
        ...values,
      });
    } else {
      updateCustomer({
        ...values,
        id: initialValues.id!,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="formName">
      <div className="my-5 flex flex-wrap sm:my-8">
        <Description
          title={
            initialValues ? 'Update Customer Details' : 'Create a Customer'
          }
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5 "
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label="Name"
            {...register('name')}
            error={errors.name?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="Email"
            {...register('email')}
            error={errors?.email?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="Air Line Fee"
            {...register('airlineFee')}
            error={errors?.airlineFee?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="Clearance Fee"
            {...register('clearanceFee')}
            error={errors?.clearanceFee?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="Airway Bill Per Pcs"
            {...register('airwayBillPerPcs')}
            error={errors?.airwayBillPerPcs?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="fte Handling Fee"
            {...register('fteHandlingFee')}
            error={errors?.fteHandlingFee?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="cfs Recovery Charges"
            {...register('cfsRecoveryCharges')}
            error={errors?.cfsRecoveryCharges?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="fte Min Weight"
            {...register('fteMinWeight')}
            error={errors?.fteMinWeight?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="fte Min charge"
            {...register('fteMinCharge')}
            error={errors?.fteMinCharge?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="cfs Min Weight"
            {...register('cfsMinWeight')}
            error={errors?.cfsMinWeight?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="cfs Min Charge"
            {...register('cfsMinCharge')}
            error={errors?.cfsMinCharge?.message}
            variant="outline"
            className="mb-5"
          />
        </Card>
      </div>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title="Service"
          details="Select a service for this customer"
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pr-4 md:w-1/3 md:pr-5"
        />
        <ServiceInput
          initialValues={initialValues}
          control={control}
          errors={errors}
        />
      </div>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title="Broker"
          details="Select a Broker for this customer"
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pr-4 md:w-1/3 md:pr-5"
        />
        <BrokerInput
          initialValues={initialValues}
          control={control}
          errors={errors}
        />
      </div>
      <div className="mb-4 text-end">
        {initialValues && (
          <Button
            variant="outline"
            onClick={router.back}
            className="me-4"
            type="button"
          >
            Go Back
          </Button>
        )}

        <Button loading={creating || updating} id="formName">
          {initialValues ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}
