import SelectInput from '@/components/ui/select-input';
import Label from '@/components/ui/label';
import { Control, FieldErrors, useFormContext } from 'react-hook-form';
import Card from '@/components/common/card';
import ValidationError from '@/components/ui/form-validation-error';
import { Manifest, ManifestFormValues } from '@/types';


const PaidToInput = ({
  control,
  errors,
  initialValues
}: {
  control: Control<ManifestFormValues>;
  errors: FieldErrors;
  initialValues?:  Partial<Manifest> | undefined | null;
}) => {
const paidInputArray = [
    {
        name:'ALLIANCE',
        id:"0"
    },
    {
        name:'ALLIANCE',
        id:"1"
    },
    {
        name:'DELTA',
        id:"2"
    },
    {
        name:'KOREAN',
        id:"3"
    },
    {
        name:'LUFTHANSA',
        id:"4"
    },
    {
        name:'MSN',
        id:"5"
    },
    {
        name:'UNITED',
        id:"6"
    },
    {
        name:'VIRGIN',
        id:"7"
    },
    {
        name:'WFS',
        id:"8"
    },
    {
        name:'N/A',
        id:"9"
    },
]

  const paidType = paidInputArray.map((paid) => {
    return {
      name: paid.name, value: paid.id
    }
  })
  return (
    <Card className="w-full sm:w-8/12 md:w-2/3">
      <div className="mb-5">
        <Label>Paid To</Label>
        <SelectInput
          name="paidTo"
          control={control}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.value}
          options={paidType}
          defaultValue={initialValues?.paidTo}
        />
        <ValidationError message={errors.paidTo?.message} />
      </div>
    </Card>
  );
};

export default PaidToInput;
