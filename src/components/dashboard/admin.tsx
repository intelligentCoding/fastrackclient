// import { Routes } from "@/config/routes";
// import { useCommodityMappingQuery } from "@/data/commodity-mapping";
import { SortOrder } from '@/types';
// import { Menu, Transition } from "@headlessui/react";
// import classNames from "classnames";
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import Card from '../common/card';
// import ErrorMessage from "../ui/error-message";
// import LinkButton from "../ui/link-button";
// import Loader from "../ui/loader/loader";
import CheckbookList from './checkbook-list';
import { checkBookDataArray } from './jsonDUmmyData';
import { useUI } from '@/contexts/ui.context';
import { FullScreenIcon } from '../icons/fullscreen-lcon';
import { CloseFullScreenIcon } from '../icons/closeFullScreen-Icon';
import { useCheckbookQuery } from '@/data/checkbook';
import Loader from '../ui/loader/loader';
import ErrorMessage from '../ui/error-message';
import SelectInput from '../ui/select-input';
import Select from '../ui/select/select';
import { DatePicker } from '../ui/date-picker';
import { isDate } from 'lodash';

export type CHECK_BOOK_STATUS =
  | 'ARRIVED_TODAY'
  | 'PICKED_UP'
  | 'DELETED'
  | 'EXAMED'
  | 'ARRIVED_24H_BEFORE_NOT_PICKEDUP'
  | 'ALL';
type SelectOptionsType = {
  name: string;
  value: CHECK_BOOK_STATUS;
};
const selectOptions: SelectOptionsType[] = [
  { name: 'All', value: 'ALL' },
  { name: 'Arrived Today', value: 'ARRIVED_TODAY' },
  { name: 'Picked up', value: 'PICKED_UP' },
  { name: 'Deleted Checkbooks', value: 'DELETED' },
  { name: 'Examed Checkbooks', value: 'EXAMED' },
  {
    name: 'Arrived 24h before but not picked up',
    value: 'ARRIVED_24H_BEFORE_NOT_PICKEDUP',
  },
];
const dateTwoDaysAgo = new Date();
dateTwoDaysAgo.setDate(dateTwoDaysAgo.getDate() - 2);
const Dashboard: React.FC = () => {
  const router = useRouter();
  const { openFullScreen, closeFullScreen, displayFullScreen } = useUI();
  const {
    query: { shop },
  } = router;
  // const [page, setPage] = useState(1);
  const [orderBy, setOrder] = useState('');
  const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);
  const [createdFrom, setCreatedFrom] = useState<string>(dateTwoDaysAgo.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const [createdTo, setCreatedTo] = useState<Date>(new Date());
  const [arrivalDateFrom, setArrivalDateFrom] = useState('');
  const [arrivalDateTo, setArrivalDateTo] = useState('');
  const [checkbookStatus, setCheckbookStatus] =
    useState<CHECK_BOOK_STATUS>('ALL');
  const {
    checkbooks,
    loading: fetchingCheckbooks,
    error,
    refetch
  } = useCheckbookQuery({
    createdFrom,
  });
  if (fetchingCheckbooks) return <Loader text="Loading Checkbooks" />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <Card className="mb-8 flex flex-col items-center justify-between md:flex-row gap-6">
        {/* <div className="mb-4 md:mb-0 md:w-1/4">
          <h1 className="text-lg font-semibold text-heading">
            Checkbook Status
          </h1>
          <Select
            getOptionLabel={(option: any) => option.name}
            getOptionValue={(option: any) => option.value}
            isLoading={fetchingCheckbooks}
            options={selectOptions}
            defaultValue={selectOptions[0]}
            // isDisabled={disabled as boolean}
          />
        </div> */}
        <div className="mb-4 md:mb-0 md:w-1/4">
          <h1 className="text-lg font-semibold text-heading">Created From</h1>
          <DatePicker
            selected={new Date(createdFrom)}
            dateFormat="yyyy/MM/dd"
            maxDate={new Date()}
            onChange={(date) => {
              if (date) {
                setCreatedFrom(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));
              }
            }}
            // onBlur={onBlur}
          />
        </div>
        {/* <div className="mb-4 md:mb-0 md:w-1/4">
          <h1 className="text-lg font-semibold text-heading">Created To</h1>
          <DatePicker
            selected={createdTo}
            dateFormat="yyyy/MM/dd"
            onChange={(date) => {
              if (date) {
                setCreatedTo(date);
              }
            }}
            maxDate={new Date()}

            // onBlur={onBlur}
          />
        </div> */}
        {displayFullScreen ? (
          <div
            className="mb-4 flex justify-end md:mb-0 md:w-1/4"
            onClick={() => closeFullScreen('CLOSE_FULLSCREEN')}
          >
            <CloseFullScreenIcon />
          </div>
        ) : (
          <div
            className="mb-4 flex justify-end md:mb-0 md:w-1/4"
            onClick={() => openFullScreen('OPEN_FULLSCREEN')}
          >
            <FullScreenIcon />
          </div>
        )}
      </Card>
      <CheckbookList checkbook={checkbooks || []} />
    </>
  );
};
export default Dashboard;
