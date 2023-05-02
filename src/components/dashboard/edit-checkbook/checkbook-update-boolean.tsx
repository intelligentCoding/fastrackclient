import Input from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import Card from '@/components/common/card';
import Description from '@/components/ui/description';

import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';

import { Checkbook } from '@/types';
import { useBrokersMutation, useUpdateBrokersMutation } from '@/data/broker';
import * as yup from 'yup';
import { useUpdateCheckbookMutation } from '@/data/checkbook';
import { CHECKBOOK_MODAL_TEXT, useCheckbookModalAction, useCheckbookModalState } from '@/components/ui/checkbook-modal/modal.context';
import Checkbox from '@/components/ui/checkbox/checkbox';

type FormValues = {
  updatedBoolean: string;
};

const defaultValues = {
  updatedBoolean: '',
};

export default function CheckbookEditBoolean() {
  const router = useRouter();
  const { data, view } = useCheckbookModalState();
  const { closeCheckbookModal } = useCheckbookModalAction();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    //@// eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    defaultValues: data.updatedBoolean ? {updatedBoolean: data.updatedBoolean}: defaultValues,
    resolver: yupResolver(
      yup.object().shape({
        updatedBoolean: yup.boolean().required('Boolean field is required'),
      })
    ),
  });
  const { mutate: editTextField, isLoading: updating } =
    useUpdateCheckbookMutation();

  const onSubmit = async (values: FormValues) => {
    const input = {
      updatedBoolean: values.updatedBoolean,
      view
    };
    editTextField({
      ...input,
      id: data.id!,
    });
    closeCheckbookModal()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="cardNameForm">
      <div className="m-auto w-full max-w-sm rounded-md bg-light p-4 pb-6 sm:w-[24rem] md:rounded-xl">
        <div className="h-full w-full text-center">
          <div className="flex h-full flex-col justify-between">
            {/* <TrashIcon className="m-auto mt-4 h-12 w-12 text-accent" /> */}
            <p className="mt-4 text-xl font-bold text-heading">{view ? `Edit ${CHECKBOOK_MODAL_TEXT[view]}` : "Edit Boolean value"}</p>

            <div className="py-2 px-6">
            <Checkbox
            {...register('updatedBoolean')}
            error={errors.updatedBoolean?.message!}
            className="mb-5"
          />
            </div>
            <div className="mt-8 flex w-full items-center justify-between space-s-4">
              <div className="w-1/2">
                <Button
                  onClick={closeCheckbookModal}
                  variant="custom"
                  className="w-full rounded bg-accent py-2 px-4 text-center text-base font-semibold text-light shadow-md transition duration-200 ease-in hover:bg-accent-hover focus:bg-accent-hover focus:outline-none"
                >
                  Cancel
                </Button>
              </div>

              <div className="w-1/2">
                <Button
                  id="cardNameForm"
                  loading={updating}
                  variant="custom"
                  className="w-full rounded bg-red-600 py-2 px-4 text-center text-base font-semibold text-light shadow-md transition duration-200 ease-in hover:bg-red-700 focus:bg-red-700 focus:outline-none"
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-5 flex flex-wrap sm:my-8">

        <Card className="w-full ">
          <Input
            label="Card Name"
            {...register('updatedBoolean')}
            error={errors.updatedBoolean?.message}
            variant="outline"
            className="mb-5"
          />
      <div className="mb-4 text-end">
        <Button loading={updating} id="cardNameForm">
          Update
        </Button>
      </div>
        </Card>
      </div>  */}
    </form>
  );
}
