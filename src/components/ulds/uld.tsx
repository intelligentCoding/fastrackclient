import Card from '@/components/common/card';
import ErrorMessage from '@/components/ui/error-message';
import Loader from '@/components/ui/loader/loader';
import UldList from '@/components/ulds/uld-list';
import { Routes } from '@/config/routes';
import { useAirportsQuery } from '@/data/airports';
import { useBrokersQuery } from '@/data/broker';
import { useUldQuery, useUldQueryOnly } from '@/data/uld';
import { SortOrder, Uld } from '@/types';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useMemo, useState } from 'react';
import Search from '../common/search';

export default function Ulds() {
  const router = useRouter();
  const {
    query: { shop },
  } = router;
  const [searchTerm, setSearchTerm] = useState<string>('');
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

  const {
    ulds,
    loading: fetchingUlds,
    error,
    refetch,
  } = useUldQuery({
    searchTerm,
  });
  const [uldsToMap, setUldsToMap] = useState<Uld[]>();
  useEffect(() => {
    refetch();
  }, []);
  // useEffect(() => {
  //   refetch();
  // }, [searchTerm]);
  if (fetchingUlds) return <Loader text="Loading Ulds" />;

  if (error) return <ErrorMessage message={error.message} />;
  async function handleSearch({ searchText }: { searchText: string }) {
    setSearchTerm(searchText);
    await refetch();
    // setPage(1);
  }
  // const debounceSearchTerm = useMemo(() => {
  //   return debounce(handleSearch, 300);
  // }, []);
  // useEffect(() => {
  //   return () => {
  //     debounceSearchTerm.cancel();
  //   };
  // }, [searchTerm]);
  return (
    <>
      <Card className="mb-8 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0 md:w-1/4">
          <h1 className="text-lg font-semibold text-heading">Ulds</h1>
        </div>

        {/* To Be Implemented */}
        <div className="flex w-full flex-col items-center ms-auto md:w-1/2 md:flex-row">
          <Search onSearch={handleSearch} />
        </div>

        <Menu
          as="div"
          className="relative inline-block ltr:text-left rtl:text-right"
        >
          {/* <Menu.Button className="group p-2">
            <MoreIcon className="w-3.5 text-body" />
          </Menu.Button> */}
          {/* <LinkButton
            href={`/${Routes.brokers}/create`}
            className="h-12 ms-4 md:ms-6"
          >
            <span>
              + Add Broker
            </span>
          </LinkButton> */}
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
                'shadow-700 absolute z-50 mt-2 w-52 overflow-hidden rounded border border-border-200 bg-light py-2 focus:outline-none ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left',
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
                  //     Export Ulds
                  //   </span>
                  // </button>
                )}
              </Menu.Item> */}
            </Menu.Items>
          </Transition>
        </Menu>
      </Card>
      {ulds && (
        <UldList
          uld={ulds || []}
          // paginatorInfo={paginatorInfo}
          // onPagination={handlePagination}
          // onOrder={setOrder}
          // onSort={setColumn}
        />
      )}
    </>
  );
}
