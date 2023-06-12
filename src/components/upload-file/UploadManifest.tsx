import { useForm } from 'react-hook-form';
import Description from '@/components/ui/description';
import Card from '@/components/common/card';
import { Manifest, ManifestFormValues } from '@/types';
import { MessagePayload } from '@/pages/manifest-upload';
import { useManifestDataMutation } from '@/data/manifest-data';
import Button from '../ui/button';
import ServiceInput from '../common/ServiceInput';
import BrokerInput from '../common/BrokerInput';
import { LoadingContainer } from '../common/loading-container';
import { AirportInput } from '../common/AirportInput';
import { CustomerInput } from '../common/CustomerInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { manifestValidationSchema } from './manifest-validation-schema';
import PaidToInput from '../common/paidToInput';

const defaultValues = {
  file: '',
  runNumber: '',
  bags: 0,
  weight: 0,
  paidTo: '',
  date: new Date(),
  airport: '',
  service: '',
  broker: '',
  customer: '',
};

type IProps = {
  initialValues?: Manifest | null;
  messages: MessagePayload;
};
export default function UploadManifest({ initialValues, messages }: IProps) {
  const { mutate: uploadManifest, isLoading: uploading } =
    useManifestDataMutation();
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ManifestFormValues>({
    // @ts-ignore
    defaultValues: initialValues ? initialValues : defaultValues,
    resolver: yupResolver(manifestValidationSchema),
  });
  const customer = watch('customer');
  // useEffect(() => {
  //   const runNumber = getValues("runNumber")
  //   const newRunNumber = customer.name + runNumber;
  //   setValue('runNumber', newRunNumber)
  // }, [customer])
  // useEffect(() => {
  //   const lastFiveDigits = messages?.masterAwb?.toString().slice(-5)
  //   setValue('runNumber',lastFiveDigits)
  // }, [messages.masterAwb])
  // const onSubmit = async (values: ManifestFormValues) => {
  //   try {
  //     uploadManifest({
  //       ...values,
  //       bags: Number(values.bags),
  //       weight: Number(values.weight),
  //       houseAwb: messages.masterAwb
  //      })
  //   } catch (error) {
  //     const serverErrors = getErrorMessage(error);
  //     Object.keys(serverErrors?.validation).forEach((field: any) => {
  //       setError(field.split('.')[1], {
  //         type: 'manual',
  //         message: serverErrors?.validation[field][0],
  //       });
  //     });
  //   }
  // };

  return (
    <LoadingContainer
      overlayOpacity={0.7}
      loading={messages.processing}
      overlayMessage="Manifest file is processing, please wait"
    >
      <form
      // onSubmit={handleSubmit(onSubmit)} id="formManifest"
      >
        <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
          <Description
            title="Upload manifest file"
            details="Upload manifest file for it to process"
            className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
          />
          {/* <Card className="w-full sm:w-8/12 md:w-2/3">
            <FileInput isExpress={false} name="file" control={control} multiple={false} uploadedFileUrl={messages.afterFileUrl} isProcessingError={messages.processError} processingErrorMessage={messages.errorMessage} />
          </Card> */}
        </div>
        {!messages.processError && messages.processingFinished ? (
          <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
            <Description
              title="Upload manifest data"
              details="Upload manifest data for it to process"
              className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
            />
            <Card className="w-full sm:w-8/12 md:w-2/3">
              {/* <Input
              label="Run Number"
              {...register('runNumber')}
              error={errors.runNumber?.message}
              variant="outline"
              className="mb-5"
            />
            <Input
              label="Bags"
              {...register('bags')}
              error={errors.bags?.message}
              variant="outline"
              className="mb-5"
              type='number'
            />
            <Input
              label="Weight"
              {...register('weight')}
              error={errors.weight?.message}
              variant="outline"
              className="mb-5"
              type='number'
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
            /> */}
            </Card>
            <div className="mt-3 flex w-full justify-end">
              <PaidToInput
                initialValues={initialValues}
                control={control}
                errors={errors}
              />
            </div>
            <div className="mt-3 flex w-full justify-end">
              <CustomerInput
                initialValues={initialValues}
                control={control}
                errors={errors}
              />
            </div>
            <div className="mt-3 flex w-full justify-end">
              <AirportInput
                initialValues={initialValues}
                control={control}
                errors={errors}
              />
            </div>
            <div className="mt-3 flex w-full justify-end">
              <ServiceInput
                initialValues={initialValues}
                control={control}
                errors={errors}
              />
            </div>
            <div className="mt-3 flex w-full justify-end">
              <BrokerInput
                initialValues={initialValues}
                control={control}
                errors={errors}
              />
            </div>
            <div className="mb-4 mt-4 w-full text-end">
              <Button id="formManifest">Submit</Button>
            </div>
          </div>
        ) : null}
      </form>
    </LoadingContainer>
  );
}
