import { Routes } from '@/config/routes';
import { useUldQuery } from '@/data/uld';
import { SortOrder, Uld } from '@/types';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import Card from '../common/card';
import { LoadingContainer } from '../common/loading-container';
import {
  useCheckbookModalAction,
  useCheckbookModalState,
} from '../ui/checkbook-modal/modal.context';
import ErrorMessage from '../ui/error-message';
import LinkButton from '../ui/link-button';
import Loader from '../ui/loader/loader';
import CreateOrUpdateUld from './checkbook-uld-form';
import CheckbookUldList from './checkbook-uld-list';

export default function CheckbookUld() {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [currentUld, setCurrentUld] = useState<Uld | undefined>(undefined);
  const { closeCheckbookModal } = useCheckbookModalAction();
  const {
    query: { shop },
  } = router;
  const [searchTerm, setSearchTerm] = useState('');
  // const [page, setPage] = useState(1);
  const [orderBy, setOrder] = useState('');
  const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);

  // function handleSearch({ searchText }: { searchText: string }) {
  //   setSearchTerm(searchText);
  //   setPage(1);
  // }

  // function handlePagination(current: any) {
  //   setPage(current);
  // }

  const { data } = useCheckbookModalState();
  const {
    ulds,
    loading: fetchingUlds,
    error,
    refetch,
  } = useUldQuery({
    checkbookId: data.id,
  });

  useEffect(() => {
    refetch(data.id);
    return () => {
      router.reload();
    };
  }, []);
  useEffect(() => {
    refetch(data.id);
  }, [editMode]);
  if (fetchingUlds) return <Loader text="Loading CheckbookUld" />;

  if (error) return <ErrorMessage message={error.message} />;

  const setTheEditMode = async () => {
    await refetch(data.id);
    setEditMode((prev) => !prev);
  };
  return (
    <>
      <LoadingContainer loading={fetchingUlds}>
        <div className="min-w-[1000px] bg-[#e5e7eb] p-10">
          <Card className="mb-8 flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0 md:w-1/4">
              <h1 className="text-lg font-semibold text-heading">
                Uld Information
              </h1>
            </div>

            {/* To Be Implemented */}
            {/* <div className="flex w-full flex-col items-center ms-auto md:w-1/2 md:flex-row">
          <Search onSearch={handleSearch} />
        </div> */}

            <Menu
              as="div"
              className="relative inline-block ltr:text-left rtl:text-right"
            >
              {/* <Menu.Button className="group p-2">
            <MoreIcon className="w-3.5 text-body" />
          </Menu.Button> */}
              <button
                // href={`/${Routes.brokers}/create`}
                className="h-12 ms-4 md:ms-6"
                onClick={() => setEditMode((prev) => !prev)}
              >
                <span>+ Add Uld</span>
              </button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  as="ul"
                  className={classNames(
                    'shadow-700 absolute z-50 mt-2 w-52 overflow-hidden rounded border border-border-200 bg-light py-2 focus:outline-none ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left'
                  )}
                >
                  {/* <Menu.Item>
                {({ active }) => (
                  // <button
                  //   onClick={handleExportServices}
                  //   className={classNames(
                  //     'flex w-full items-center space-x-3 px-5 py-2.5 text-sm font-semibold capitalize transition duration-200 hover:text-accent focus:outline-none rtl:space-x-reverse',
                  //     active ? 'text-accent' : 'text-body'
                  //   )}
                  // >
                  //   <DownloadIcon className="w-5 shrink-0" />
                  //   <span className="whitespace-nowrap">
                  //     Export CheckbookUldList
                  //   </span>
                  // </button>
                )}
              </Menu.Item> */}
                </Menu.Items>
              </Transition>
            </Menu>
          </Card>
          {editMode && (
            <CreateOrUpdateUld
              refetch={refetch}
              initialValues={currentUld}
              setEditMode={setTheEditMode}
              checkbookId={data.id}
            />
          )}
          {!editMode && (
            <CheckbookUldList
              setEditMode={setTheEditMode}
              setCurrentUld={setCurrentUld}
              refetch={refetch}
              uld={ulds || []}
            />
          )}
        </div>
      </LoadingContainer>
    </>
  );
}
