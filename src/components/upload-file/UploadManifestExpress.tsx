import { useForm } from 'react-hook-form';
import Description from '@/components/ui/description';
import Card from '@/components/common/card';
import FileInput from '@/components/ui/file-input';
import { getErrorMessage } from '@/utils/form-error';
import { useManifestDataExpressMutation } from '@/data/manifest-data';
import Button from '../ui/button';
import { LoadingContainer } from '../common/loading-container';
import { AirportInput } from '../common/AirportInput';
import { CustomerInput } from '../common/CustomerInput';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { manifestValidationSchema } from './manifest-validation-schema';
import PaidToInput from '../common/paidToInput';
import { Manifest, ManifestFormValues } from '@/types';
import Input from '../ui/input';

const defaultValues = {
  file: '',
  paidTo: '',
  airport: '',
  customer: '',
  bags: 0,
};

export interface Errors {
  error: string;
  location: string;
}
type IProps = {
  initialValues?: Manifest | null;
};
export default function UploadManifestExpress({ initialValues }: IProps) {
  const [processingError, setProcessingError] = useState(false);
  const [processingCode, setProcessingCode] = useState<number>(0);
  const [processingErrorMessage, setProcessingErrorMessage] = useState<
    Errors[]
  >([]);
  const [afterFileUrl, setAfterFileUrl] = useState<string>('');
  const { mutate: uploadManifestExpress, isLoading: uploading } =
    useManifestDataExpressMutation();
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
  const file = watch('file');
  useEffect(() => {
    setProcessingError(file?.status === 'ERROR' ? true : false);
    setProcessingErrorMessage(file?.errors);
    setProcessingCode(file?.code);
    if (file.afterFileUpload) {
      setAfterFileUrl(file.afterFileUpload);
    }
  }, [file]);
  const onSubmit = async (values: ManifestFormValues) => {
    console.log(typeof values.bags);
    try {
      uploadManifestExpress({
        ...values,
      });
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
    <LoadingContainer loading={uploading} overlayOpacity={0.7}>
      <form onSubmit={handleSubmit(onSubmit)} id="formManifestExpress">
        <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
          <Description
            title="Upload manifest file"
            details="Upload manifest file for it to process"
            className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
          />
          <Card className="w-full sm:w-8/12 md:w-2/3">
            <FileInput
              isExpress={true}
              name="file"
              control={control}
              multiple={false}
              processingCode={processingCode}
              isProcessingError={processingError}
              processingErrorMessage={processingErrorMessage}
              uploadedFileUrl={afterFileUrl}
            />
          </Card>
        </div>
        <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
          <Description
            title="Upload manifest data"
            details="Upload manifest data for it to process"
            className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
          />
          <div className="mt-3 flex w-full justify-end">
            <PaidToInput
              initialValues={initialValues}
              control={control}
              errors={errors}
            />
          </div>
          <div className="mt-3 flex w-full justify-end">
            <Card className="w-full sm:w-8/12 md:w-2/3">
              <Input
                label="Bags"
                {...register('bags')}
                error={errors.bags?.message}
                variant="outline"
                className="mb-5"
                type="number"
              />
            </Card>
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
          <div className="mb-4 mt-4 w-full text-end">
            <Button disabled={processingError} id="formManifestExpress">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </LoadingContainer>
  );
}
