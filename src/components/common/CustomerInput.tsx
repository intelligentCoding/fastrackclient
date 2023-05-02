import SelectInput from '@/components/ui/select-input';
import Label from '@/components/ui/label';
import { Control, FieldErrors, useFormContext } from 'react-hook-form';
import Card from '@/components/common/card';
import ValidationError from '@/components/ui/form-validation-error';
import { Manifest, ManifestFormValues } from '@/types';
import { useCustomersQuery } from '@/data/customer';


export const CustomerInput = ({
  control,
  errors,
  initialValues,

}: {
  control: Control<ManifestFormValues>;
  errors: FieldErrors;
  initialValues?:  Partial<Manifest> | undefined | null;
 
}) => {
  const { customers, loading: fetchingServices, error } = useCustomersQuery();

  const customerType = customers.map((customer) => {
    return {
      name: customer.name, value: customer.id
    }
  })

  return (
    <Card className="w-full sm:w-8/12 md:w-2/3">
      <div className="mb-5">
        <Label>Add Customer</Label>
        <SelectInput
          name={'customer'}
          control={control}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.value}
          options={customerType}
          defaultValue={initialValues?.customer?.id}
        />
        <ValidationError message={errors.customerId?.message} />
      </div>
    </Card>
  );
};

