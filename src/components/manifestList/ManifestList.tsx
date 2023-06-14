import { useManifestListQuery } from '@/data/upload';
import Card from '../common/card';
import ErrorMessage from '../ui/error-message';
import Loader from '../ui/loader/loader';
import Description from '../ui/description';
import Label from '../ui/label';
import Link from '../ui/link';

export default function ManifestList() {
  const {
    manifestList,
    loading: fetchingServices,
    error,
  } = useManifestListQuery();
  if (fetchingServices) return <Loader text="Loading Manifest List" />;

  if (error) return <ErrorMessage message={'error'} />;

  return (
    <>
      {manifestList.length ? (
        manifestList.map((list, index) => {
          return (
            <div
              key={index}
              className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8 "
            >
              <Description
                title="Key Name"
                // details="Status"
                className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
              />
              <Card className="w-full sm:w-8/12 md:w-2/3">
                <Label>Uploaded File Name:</Label>
                <p className="-mt-2 text-black">{list.uploadedFileName}</p>
                <div className="border-b-2 border-blue-500"></div>
                <Label className="mt-6">Before File URL:</Label>
                {/* <Link href={list.beforeFileURL} >{list.beforeFileURL}</Link> */}
                <div className="border-b-2 border-blue-500"></div>
                <Label className="mt-6">After File URL:</Label>
                {/* <Link href={list.afterFileURL} >{list.afterFileURL}</Link> */}
                <div className="border-b-2 border-blue-500"></div>
                <Label className="mt-6">Status:</Label>
                <p className="-mt-2 text-black">{list.status}</p>
                <div className="border-b-2 border-blue-500"></div>
              </Card>
            </div>
          );
        })
      ) : (
        <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8 ">
          <Description
            title="No Files Available"
            details="ulpload some manifest files to show "
            className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
          />
          <Card className="w-full sm:w-8/12 md:w-2/3">
            <Label>No Files Available </Label>
          </Card>
        </div>
      )}
    </>
  );
}
