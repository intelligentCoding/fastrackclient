import Input from '@/components/ui/input';
import {
  useForm,
} from 'react-hook-form';
import Button from '@/components/ui/button';
import Card from '@/components/common/card';
import Description from '@/components/ui/description';

import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';

import { serviceValidationSchema } from './service-validation-schema';
import { Airports } from '@/types';
import { useAirportsMutation, useUpdateAirportsMutation } from '@/data/airports';




type FormValues = {
  name: string;
  code: string;
};

const defaultValues = {
  name: '',
  code: ''
};

type IProps = {
  initialValues?: Partial<Airports> | undefined;
};
export default function CreateOrUpdateAirport({
  initialValues,
}: IProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    // shouldUnregister: true,
    //@// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
    defaultValues: initialValues
      ? initialValues
      : defaultValues,
    resolver: yupResolver(serviceValidationSchema),
  });

  const { mutate: createAirport, isLoading: creating } =
  useAirportsMutation();
  const { mutate: updateAirport, isLoading: updating } =
    useUpdateAirportsMutation();

  const onSubmit = async (values: FormValues) => {
    const input = {
      name: values.name,
      code: values.code
    };
    if(!initialValues) {
      createAirport({
        ...input
      })
    } else {
      updateAirport({
        ...input,
        id: initialValues.id!
      })
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="formName">

      <div className="my-5 flex flex-wrap sm:my-8">
        <Description
          title={initialValues ? 'Update Airport Details' : 'Create a Airport'}
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
            label="Code"
            {...register('code')}
            error={errors.code?.message}
            variant="outline"
            className="mb-5"
          />
        </Card>
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
          {initialValues
            ? 'Update'
            : 'Create'}
        </Button>
      </div>
    </form>
  );
}
