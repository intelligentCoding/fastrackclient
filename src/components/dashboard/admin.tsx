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

const Dashboard: React.FC = () => {
  const router = useRouter();
  const { openFullScreen, closeFullScreen, displayFullScreen } = useUI();
  const {
    query: { shop },
  } = router;
  // const [page, setPage] = useState(1);
  const [orderBy, setOrder] = useState('');
  const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);

  // const { commodityMap, loading: fetchingServices, error } = useCommodityMappingQuery ({
  //   mappedTo: searchTerm,
  //   orderBy,
  //   sortedBy,
  // });
  // if (fetchingServices) return <Loader text="Loading Maps" />;

  // if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <Card className="mb-8 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0 md:w-1/4">
          <h1 className="text-lg font-semibold text-heading">Checkbook</h1>
        </div>
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
      {checkBookDataArray && (
        <CheckbookList checkbook={checkBookDataArray || []} />
      )}
    </>
  );
};
export default Dashboard;
