import Uploader from '@/components/common/uploader';
import { Controller } from 'react-hook-form';
import { Errors } from '../upload-file/UploadManifestExpress';

interface FileInputProps {
  control: any;
  name: string;
  multiple?: boolean;
  acceptFile?: boolean;
  helperText?: string;
  defaultValue?: any;
  uploadedFileUrl?: string;
  isProcessingError?: boolean
  processingErrorMessage?: Errors[]
  processingCode: number
  isExpress: boolean
}

const FileInput = ({
  control,
  name,
  multiple = false,
  acceptFile = true,
  helperText,
  defaultValue = [],
  uploadedFileUrl,
  isProcessingError,
  processingErrorMessage,
  processingCode,
  isExpress,
}: FileInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { ref, ...rest } }) => (
        <Uploader
          {...rest}
          multiple={multiple}
          acceptFile={acceptFile}
          helperText={helperText}
          uploadedFileUrl={uploadedFileUrl}
          isProcessingError={isProcessingError}
          processingErrorMessage={processingErrorMessage}
          isExpress={isExpress}
          processingCode={processingCode}
        />
      )}
    />
  );
};

export default FileInput;
