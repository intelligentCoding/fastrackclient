import SelectInput from '@/components/ui/select-input';
import Label from '@/components/ui/label';
import { Control, FieldErrors, useFormContext } from 'react-hook-form';
import Card from '@/components/common/card';
import ValidationError from '@/components/ui/form-validation-error';
import { Manifest, ManifestFormValues } from '@/types';
import { useBrokersQuery } from '@/data/broker';


const BrokerInput = ({
  control,
  errors,
  initialValues
}: {
  control: Control<ManifestFormValues>;
  errors: FieldErrors;
  initialValues?:  Partial<Manifest> | undefined | null;
}) => {
  const { brokers, loading: fetchingServices, error } = useBrokersQuery();

  const brokerType = brokers.map((broker) => {
    return {
      name: broker.code, value: broker.id
    }
  })

  return (
    <Card className="w-full sm:w-8/12 md:w-2/3">
      <div className="mb-5">
        <Label>Add Broker</Label>
        <SelectInput
          name="broker"
          control={control}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.value}
          options={brokerType}
          defaultValue={initialValues?.broker?.id}
        />
        <ValidationError message={errors.brokerId?.message} />
      </div>
    </Card>
  );
};

export default BrokerInput;
