import SelectInput from '@/components/ui/select-input';
import Label from '@/components/ui/label';
import { Control, FieldErrors, useFormContext } from 'react-hook-form';
import Card from '@/components/common/card';
import ValidationError from '@/components/ui/form-validation-error';
import { Manifest, ManifestFormValues } from '@/types';
import { useAirportsQuery } from '@/data/airports';

export const AirportInput = ({
  control,
  errors,
  initialValues,
}: {
  control: Control<ManifestFormValues>;
  errors: FieldErrors;
  initialValues?: Partial<Manifest> | undefined | null;
}) => {
  const { airports, loading: fetchingServices, error } = useAirportsQuery();

  const airportType = airports.map((airport) => {
    return {
      name: airport.code,
      value: airport.id,
    };
  });

  return (
    <Card className="w-full sm:w-8/12 md:w-2/3">
      <div className="mb-5">
        <Label>Add airport</Label>
        <SelectInput
          name="airport"
          control={control}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.value}
          options={airportType}
          defaultValue={initialValues?.airport?.id}
        />
        <ValidationError message={errors.airport?.message} />
      </div>
    </Card>
  );
};

// export default AirportInput;
