import Input from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import Card from '@/components/common/card';
import Description from '@/components/ui/description';

import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';

import { Airports, Brokers, Uld } from '@/types';
import { useBrokersMutation, useUpdateBrokersMutation } from '@/data/broker';
import { uldValidationSchema } from './uld-validation-schema';
import { useUldMutation, useUpdateUldMutation } from '@/data/uld';
import TextArea from '../ui/text-area';
import Checkbox from '../ui/checkbox/checkbox';
import { useCheckbookModalAction, useCheckbookModalState } from '../ui/checkbook-modal/modal.context';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query';

type FormValues = {
  UldNumber: string;
  totalPieces: number;
  losePieces: number;
  instructions: string;
  isPure: boolean;
};

const defaultValues = {
  UldNumber: '',
  totalPieces: 0,
  losePieces: 0,
  instructions: '',
  isPure: false,
};

type IProps = {
  initialValues?: Partial<Uld> | undefined;
  checkbookId: string;
  setEditMode: (value: boolean) => void
};
export default function CreateOrUpdateUld({
  initialValues,
  checkbookId,
  setEditMode,
}: IProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    // shouldUnregister: true,
    //@// eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    defaultValues: initialValues ? initialValues : defaultValues,
    resolver: yupResolver(uldValidationSchema),
  });
  const isItPure = watch('isPure');

  const { mutate: createUld, isLoading: creating } = useUldMutation();
  const { mutate: updateUld, isLoading: updating } = useUpdateUldMutation();
  const {data} = useCheckbookModalState()
  const {openCheckbookModal, closeCheckbookModal} = useCheckbookModalAction()
  const onSubmit = async (values: FormValues) => {
    const input = {
      UldNumber: values.UldNumber,
      totalPieces: values.totalPieces,
      losePieces: values.isPure ? 0 : values.losePieces,
      instructions: values.instructions,
      isPure: values.isPure,
    };
    if (!initialValues) {
      createUld({
        ...input,
        checkbookId,
      });
      // closeCheckbookModal()
      setEditMode(false)
      // openCheckbookModal('ULD', {
      //   id: data.id,
      // })
    } else {
      updateUld({
        ...input,
        id: initialValues.id!,
      });
      setEditMode(false)
      // refetch()
      // closeCheckbookModal()
      // openCheckbookModal('ULD', {
      //   id: data.id,
      // })
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="formName">
      <div className="my-5 flex flex-wrap sm:my-8">
        <Description
          title={initialValues ? 'Update Uld Details' : 'Create a Uld'}
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5 "
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label="Uld Number"
            {...register('UldNumber')}
            error={errors.UldNumber?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="Total Pieces"
            {...register('totalPieces')}
            error={errors.totalPieces?.message}
            variant="outline"
            className="mb-5"
            type="number"
          />
          <Checkbox
          label='Is it pure?'
            {...register('isPure')}
            error={errors.isPure?.message!}
            className="mb-5"
          />
          {!isItPure && (
            <Input
              label="Loose Pieces"
              {...register('losePieces')}
              error={errors.losePieces?.message}
              variant="outline"
              className="mb-5"
              type="number"
            />
          )}
          <TextArea
            label="Instructions"
            {...register('instructions')}
            variant="outline"
            className="mb-5"
          />
        </Card>
      </div>
      <div className="mb-4 text-end">
          <Button
            variant="outline"
            onClick={() => setEditMode(false)}
            className="me-4"
            type="button"
          >
            Go Back
          </Button>

        <Button loading={creating || updating} id="formName">
          {initialValues ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}


