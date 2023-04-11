import { UploadIcon } from '@/components/icons/upload-icon';
import { useDropzone } from 'react-dropzone';
import {useFileUploadMutation} from '../../data/upload-file'


export default function ImportXls({ title }: any) {
  const { getRootProps, getInputProps ,acceptedFiles} = useDropzone({
    accept: '.xlsx',
    multiple: false,   
  });
  console.log('acceptedFiles',acceptedFiles);
  const {mutate:uploadFile,isLoading}=  useFileUploadMutation()
 
 if(acceptedFiles.length){
    uploadFile({
        file:acceptedFiles,
    })
 }

  return (
    <section className="upload">
        <h1 className='text-center font-bold mb-5 text-3xl'>Upload File</h1>
      <div
        {...getRootProps({
          className:
            'border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none p-5',
        })}
      >
        <input {...getInputProps()} />
        {isLoading && (
          <span
            className="ms-2 h-[30px] w-[30px] animate-spin rounded-full border-2 border-t-2 border-transparent"
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
