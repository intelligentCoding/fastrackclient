import { Controller, useForm } from 'react-hook-form';
import Description from '@/components/ui/description';
import Card from '@/components/common/card';
import FileInput from '@/components/ui/file-input';
import { getErrorMessage } from '@/utils/form-error';
import { AttachmentInput, ManifestFormValues } from '@/types';
import { MessagePayload } from '@/pages/manifest-upload';
import { useManifestDataMutation } from '@/data/manifest-data';

import Input from '../ui/input';
import Button from '../ui/button';
import Label from '../ui/label';
import { DatePicker } from '../ui/date-picker';

import ServiceInput from '../common/ServiceInput';
import BrokerInput from '../common/BrokerInput';
import { LoadingContainer } from '../common/loading-container';
import { AirportInput } from '../common/AirportInput';
import { CustomerInput } from '../common/CustomerInput';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { manifestValidationSchema } from './manifest-validation-schema'
import PaidToInput from '../common/paidToInput'


const defaultValues = {
  file: '',
  runNumber: '',
  bags: '',
  weight: '',
  paidTo: '',
  date: new Date(),
  airport: '',
  service: '',
  broker: '',
  customer: ''
};

type IProps = {
  initialValues?: AttachmentInput | null;
  messages: MessagePayload
};
export default function UploadManifest({ initialValues, messages }: IProps) {
  const [defaultRunNum, setDefaultRunNum] = useState<any>()
  const { mutate: uploadManifest, isLoading: uploading } = useManifestDataMutation()
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
      ? initialValues
      : defaultValues,
    resolver: yupResolver(manifestValidationSchema)
  });

  const onSubmit = async (values: ManifestFormValues) => {
    let manifestData = undefined
    const input = {
      file: {
        thumbnail: values?.file?.thumbnail,
        original: values?.file?.original,
        id: values?.file?.id,
      },
    };
    const nameofCustomer = values.customer.name
    if (messages?.masterAwb) {
      const masterAwb = messages.masterAwb;
      const lastFiveNum = masterAwb.slice(-5);
      manifestData = {
        ...values,
        runNumber: nameofCustomer + lastFiveNum
      }
      setDefaultRunNum(nameofCustomer + lastFiveNum)
    } else {
      manifestData = {
        ...values,
        runNumber: nameofCustomer
      }
      setDefaultRunNum(nameofCustomer)
    }



    try {
      uploadManifest({ ...manifestData })
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
    <LoadingContainer overlayOpacity={0.7} loading={messages.processing} overlayMessage='Manifest file is processing, please wait'>
      <form onSubmit={handleSubmit(onSubmit)} id="formManifest">
        <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-border-base sm:my-8">
          <Description
            title="Upload manifest file"
            details="Upload manifest file for it to process"
            className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
          />
          <Card className="w-full sm:w-8/12 md:w-2/3">
            <FileInput name="file" control={control} multiple={false} uploadedFileUrl={messages.afterFileUrl} isProcessingError={messages.processError} processingErrorMessage={messages.errorMessage} />
          </Card>
        </div>
        {!messages.processError && messages.processingFinished ? <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-border-base sm:my-8">
          <Description
            title="Upload manifest data"
            details="Upload manifest data for it to process"
            className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
          />
          <Card className="w-full sm:w-8/12 md:w-2/3">
            <Input
              label="Run Number"
              name='runNumber'
              error={errors.runNumber?.message}
              variant="outline"
              className="mb-5"
              readOnly={true}
              defaultValue={defaultRunNum}
              ref={() => register('runNumber')}
            />
            <Input
              label="Bags"
              {...register('bags')}
              error={errors.bags?.message}
              variant="outline"
              className="mb-5"
            />
            <Input
              label="Weight"
              {...register('weight')}
              error={errors.weight?.message}
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
            <PaidToInput initialValues={initialValues} control={control} errors={errors} />
          </div>
          <div className='w-full flex justify-end mt-3'>
            <CustomerInput initialValues={initialValues} control={control} errors={errors} />
          </div>
          <div className='w-full flex justify-end mt-3'>
            <AirportInput initialValues={initialValues} control={control} errors={errors} />
          </div>
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
        </div> : null}

      </form>
    </LoadingContainer>
  );
}
