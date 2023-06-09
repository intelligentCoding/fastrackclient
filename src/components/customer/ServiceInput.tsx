import SelectInput from '@/components/ui/select-input';
import Label from '@/components/ui/label';
import { Control, FieldErrors, useFormContext } from 'react-hook-form';
import Card from '@/components/common/card';
import ValidationError from '@/components/ui/form-validation-error';
import { useServicesQuery } from '@/data/services';
import { Customer, CustomerFormValues } from '@/types';


const ServiceInput = ({
  control,
  errors,
  initialValues
}: {
  control: Control<CustomerFormValues>;
  errors: FieldErrors;
  initialValues?: Partial<Customer> | undefined;
}) => {
  const { services, loading: fetchingServices, error } = useServicesQuery();

  const servicesType = services.map((service) => {
    return {
      name: service.code, value: service.id
    }
  })

  return (
    <Card className="w-full sm:w-8/12 md:w-2/3">
      <div className="mb-5">
        <Label>Add Service</Label>
        <SelectInput
          name="service"
          control={control}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.value}
          options={servicesType}
          defaultValue={initialValues?.service?.id}
        />
        <ValidationError message={errors.serviceId?.message} />
      </div>
    </Card>
  );
};

export default ServiceInput;
