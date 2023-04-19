import { useForm } from 'react-hook-form';
import Description from '@/components/ui/description';
import Card from '@/components/common/card';
import FileInput from '@/components/ui/file-input';
import { AttachmentInput } from '@/types';

import { getErrorMessage } from '@/utils/form-error';
import { Config } from '@/config';
import { LoadingContainer } from '../common/loading-container';
import { MessagePayload } from '@/pages/manifest-upload';

type FormValues = {
  file: AttachmentInput;
};

const defaultValues = {
  file: '',
};

type IProps = {
  initialValues?: AttachmentInput | null;
  messages: MessagePayload
};
export default function UploadManifest({ initialValues, messages }: IProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    // @ts-ignore
    defaultValues: initialValues
      ? {
                  ...initialValues,
        }
      : defaultValues,
  });

  const onSubmit = async (values: FormValues) => {
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
    <LoadingContainer overlayOpacity={0.7} loading={messages.processing} overlayMessage='Manifest file is processing, please wait'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-border-base sm:my-8">
        <Description
          title="Upload manifest file"
          details="Upload manifest file for it to process"
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <FileInput name="file" control={control} multiple={false} uploadedFileUrl={messages.afterFileUrl} isProcessingError={messages.processError} processingErrorMessage={messages.errorMessage}/>
        </Card>
      </div>
    </form>
</LoadingContainer>
  );
}
