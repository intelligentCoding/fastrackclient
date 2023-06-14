import { UploadIcon } from '@/components/icons/upload-icon';
import { useDropzone } from 'react-dropzone';
import { useFileUploadMutation } from '../../data/upload-file';
import { useCallback } from 'react';

export default function ImportXls({ title }: any) {
  const { mutate: uploadFile, isLoading } = useFileUploadMutation();

  const onDrop = useCallback((acceptedFiles) => {
    console.log(
      '🚀 ~ file: import-xls.tsx:10 ~ onDrop ~ acceptedFiles:',
      acceptedFiles,
    );

    if (acceptedFiles.length) {
      uploadFile(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.xlsx',
    multiple: false,
    onDrop,
  });
  return (
    <section className="upload">
      <h1 className="mb-5 text-center text-3xl font-bold">Upload File</h1>
      <div
        {...getRootProps({
          className:
            'border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none p-5',
        })}
      >
        <input {...getInputProps()} />
        {isLoading && (
          <span
            className="h-[30px] w-[30px] animate-spin rounded-full border-2 border-t-2 border-transparent ms-2"
            style={{
              borderTopColor: 'rgb(var(--color-accent))',
            }}
          />
        )}
        {!isLoading && <UploadIcon className="text-muted-light" />}
        <p className="mt-4 text-center text-sm text-body">
          <span className="font-semibold text-accent">{title}</span>
        </p>
      </div>
    </section>
  );
}
