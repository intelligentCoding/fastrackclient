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
import { CommodityMapping } from '@/types';
import {useCommodityMapMutation, useUpdateCommodityMapMutation} from '@/data/commodity-mapping';




type FormValues = {
    mappedFrom: string;
    mappedTo: string;
};

const defaultValues = {
    mappedFrom: '',
    mappedTo: ''
};

type IProps = {
  initialValues?: Partial<CommodityMapping> | undefined;
};
export default function CreateOrUpdateCommodityMap({
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

  const { mutate: createCommodityMap, isLoading: creating } =
  useCommodityMapMutation();
  const { mutate: updateCommodityMap, isLoading: updating } =
    useUpdateCommodityMapMutation();

  const onSubmit = async (values: FormValues) => {
    const input = {
        mappedFrom: values.mappedFrom,
        mappedTo: values.mappedTo
    };
    if(!initialValues) {
        createCommodityMap({
        ...input
      })
    } else {
        updateCommodityMap({
        ...input,
        id: initialValues.id!
      })
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="formName">

      <div className="my-5 flex flex-wrap sm:my-8">
        <Description
          title={initialValues ? 'Update Destination Details' : 'Create a Destination'}
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5 "
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label="Mapped From"
            {...register('mappedFrom')}
            error={errors.mappedFrom?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="Mapped To"
            {...register('mappedTo')}
            error={errors.mappedTo?.message}
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
