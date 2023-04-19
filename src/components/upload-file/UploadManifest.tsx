import { Controller, useForm } from 'react-hook-form';
import Description from '@/components/ui/description';
import Card from '@/components/common/card';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import FileInput from '@/components/ui/file-input';
import { Manifest, ManifestFormValues } from '@/types';

import { getErrorMessage } from '@/utils/form-error';
import { Config } from '@/config';
import Input from '../ui/input';
import Button from '../ui/button';
import { DatePicker } from '../ui/date-picker';
import { useState } from 'react';
import Label from '../ui/label';
import ServiceInput from '../common/ServiceInput';
import BrokerInput from '../common/BrokerInput';



const defaultValues = {
  file: '',
  runNumber: '',
  id: '',
  bags: '',
  weight: '',
  paidTo: '',
  date: new Date(),
  airport: '',
  service: '',
  broker: '',
};

type IProps = {
  initialValues?: Partial<Manifest> | null;
};
export default function UploadManifest({ initialValues }: IProps) {
  const router = useRouter();
  const { locale } = useRouter();
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    formState: { errors },
  } = useForm<ManifestFormValues>({
    // @ts-ignore
    defaultValues: initialValues
      ? {
        ...initialValues,
      }
      : defaultValues,
  });

  const onSubmit = async (values: ManifestFormValues) => {
    console.log("🚀 ~ file: UploadManifest.tsx:47 ~ onSubmit ~ values:", values)
    console.log("🚀 ~ file: UploadManifest.tsx:47 ~ onSubmit ~ values:", startDate)
    const input = {
      file: {
        thumbnail: values?.file?.thumbnail,
        original: values?.file?.original,
        id: values?.file?.id,
      },
    };

    try {

    } catch (error) {
      const serverErrors = getErrorMessage(error);
      Object.keys(serverErrors?.validation).forEach((field: any) => {
        setError(field.split('.')[1], {
          type: 'manual',
          message: serverErrors?.validation[field][0],
        });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="formManifest">
      <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-border-base sm:my-8">
        <Description
          title="Upload manifest file"
          details="Upload manifest file for it to process"
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <FileInput name="file" control={control} multiple={false} />
        </Card>
      </div>
      <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-border-base sm:my-8">
        <Description
          title="Upload manifest data"
          details="Upload manifest data for it to process"
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label="Bags"
            {...register('bags')}
            // error={errors.bags}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="Weight"
            {...register('weight')}
            // error={errors.bags}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="Paid To"
            {...register('paidTo')}
            // error={errors.bags}
            variant="outline"
            className="mb-5"
          />
          <Label>Date</Label>
          <Controller
            control={control}
            name="date" 
            render={({ field: { onChange, onBlur, value, } }) => (
              <DatePicker
              selected={value}
              dateFormat="yyyy/MM/dd"
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </Card>
        <div className='w-full flex justify-end mt-3'>
          <ServiceInput initialValues={initialValues} control={control} errors={errors} />
        </div>
        <div className='w-full flex justify-end mt-3'>
          <BrokerInput initialValues={initialValues} control={control} errors={errors} />
        </div>
        <div className="mb-4 mt-4 text-end w-full">
          <Button id="formManifest">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
