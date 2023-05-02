import Input from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import Card from '@/components/common/card';
import Description from '@/components/ui/description';

import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';

import { Checkbook } from '@/types';
import { useBrokersMutation, useUpdateBrokersMutation } from '@/data/broker';
import * as yup from 'yup';
import { useUpdateCheckbookMutation } from '@/data/checkbook';
import {
  useCheckbookModalAction,
  useCheckbookModalState,
} from '@/components/ui/checkbook-modal/modal.context';
import { DatePicker } from '@/components/ui/date-picker';
import ValidationError from '@/components/ui/form-validation-error';
import Label from '@/components/ui/label';

type FormValues = {
  updatedDate: string;
};

const defaultValues = {
  updatedDate: '',
};

export default function CheckbookEditDate() {
  const router = useRouter();
  const { data, view } = useCheckbookModalState();
  const { closeCheckbookModal } = useCheckbookModalAction();
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    //@// eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    defaultValues: data.updatedDate
      ? { updatedDate: data.updatedDate }
      : defaultValues,
    resolver: yupResolver(
      yup.object().shape({
        // updatedDate: yup.string().required('Date is required'),
      })
    ),
  });
  const { mutate: editTextField, isLoading: updating } =
    useUpdateCheckbookMutation();

  const onSubmit = async (values: FormValues) => {
    const input = {
      updatedText: values.updatedDate,
      view,
    };
    editTextField({
      ...input,
      id: data.id!,
    });
    closeCheckbookModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="cardNameForm">
      <div className="m-auto w-full max-w-sm rounded-md bg-light p-4 pb-6 sm:w-[24rem] md:rounded-xl">
        <div className="h-full w-full text-center">
          <div className="flex h-full flex-col justify-between">
            {/* <TrashIcon className="m-auto mt-4 h-12 w-12 text-accent" /> */}
            <p className="mt-4 text-xl font-bold text-heading">Update Date</p>
            <div className="py-2 px-6 leading-relaxed text-body-dark dark:text-muted">
              <Controller
                control={control}
                name="updatedDate"
                render={({ field: { onChange, onBlur, value } }) => {
  
                  return (
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      onChange={onChange}
                      onBlur={onBlur}
                      //@ts-ignore
                      selected={value  ? new Date(value) : null}
                      selectsStart
                      startDate={new Date()}
                      className="border border-border-base"
                    />
                  )
                }
                }
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
    </form>
  );
}
