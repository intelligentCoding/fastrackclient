import { Table } from '@/components/ui/table';
import ActionButtons from '@/components/common/action-buttons';

import { Airports, Services, SortOrder, Uld } from '@/types';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CloseFillIcon } from '../icons/close-fill';
import { CheckMarkCircle } from '../icons/checkmark-circle';
import { TrashIcon } from '../icons/trash';
import {
  useCheckbookModalAction,
  useCheckbookModalState,
} from '../ui/checkbook-modal/modal.context';
import { PencilIcon } from '../icons/pencil-icon';
import CreateOrUpdateUld from './checkbook-uld-form';
import Button from '../ui/button';

type IProps = {
  uld: Uld[] | undefined;
  refetch: () => void;
  setEditMode: () => void;
  setCurrentUld: (value: Uld) => void;
};

const CheckbookUldList = ({
  uld,
  refetch,
  setEditMode,
  setCurrentUld,
}: // paginatorInfo,
// onPagination,
// onSort,
// onOrder,
IProps) => {
  // const { data, paginatorInfo } = orders! ?? {};
  const router = useRouter();
  // const [editMode, setEditMode] = useState(false);
  // const [currentUld, setCurrentUld] = useState<Uld | undefined>(undefined)
  const { t } = useTranslation();
  const rowExpandable = (record: any) => record.children?.length;
  const { openCheckbookModal, closeCheckbookModal } = useCheckbookModalAction();
  const { data } = useCheckbookModalState();
  const [sortingObj, setSortingObj] = useState<{
    sort: SortOrder;
    column: string | null;
  }>({
    sort: SortOrder.Desc,
    column: null,
  });

  // const onHeaderClick = (column: string | null) => ({
  //   onClick: () => {
  //     onSort((currentSortDirection: SortOrder) =>
  //       currentSortDirection === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc
  //     );
  //     onOrder(column!);

  //     setSortingObj({
  //       sort:
  //         sortingObj.sort === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc,
  //       column: column,
  //     });
  //   },
  // });

  const columns = [
    {
      title: 'Uld Number',
      dataIndex: 'UldNumber',
      key: 'UldNumber',
      align: 'center',
      width: 150,
    },
    {
      title: 'totalPieces',
      dataIndex: 'totalPieces',
      key: 'totalPieces',
      align: 'center',
    },
    {
      title: 'Is Pure?',
      dataIndex: 'isPure',
      key: 'isPure',
      align: 'center',
      width: 100,
      render: (isPure: boolean, airports: Airports) => {
        if (!isPure) {
          return (
            <div className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none">
              <CloseFillIcon width={20} />
            </div>
          );
        } else {
          return (
            <div className="text-accent transition duration-200 hover:text-accent-hover focus:outline-none">
              <CheckMarkCircle width={20} />
            </div>
          );
        }
      },
    },
    {
      title: 'Is Picked Up?',
      dataIndex: 'isPickedUp',
      key: 'isPickedUp',
      align: 'center',
      width: 100,
      render: (isPickedUp: boolean, airports: Airports) => {
        if (!isPickedUp) {
          return (
            <div className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none">
              <CloseFillIcon width={20} />
            </div>
          );
        } else {
          return (
            <div className="text-accent transition duration-200 hover:text-accent-hover focus:outline-none">
              <CheckMarkCircle width={20} />
            </div>
          );
        }
      },
    },
    {
      title: 'losePieces',
      dataIndex: 'losePieces',
      key: 'losePieces',
      align: 'center',
    },
    {
      title: 'instructions',
      dataIndex: 'instructions',
      key: 'instructions',
      align: 'center',
    },
    // {!checkbooks.isPickupOrderDone && (
    //   <div className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none">
    //     <CloseFillIcon width={20} />
    //   </div>
    // )}
    // {checkbooks.isPickupOrderDone && (
    //   <div className="text-accent transition duration-200 hover:text-accent-hover focus:outline-none">
    //     <CheckMarkCircle width={20} />
    //   </div>
    // )}
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'actions',
      align: 'center',
      width: 100,
      render: (id: string, uld: Uld) => {
        return (
          <>
            <div className="flex gap-6">
              <div className="h-[20px] w-[20px] cursor-pointer text-red-500 transition duration-200  hover:text-red-300 focus:outline-none">
                <TrashIcon
                  onClick={() =>
                    openCheckbookModal('DELETE_ULD', {
                      uldId: id,
                      id: data.id,
                    })
                  }
                />
              </div>
              <div className="h-[25px] w-[25px] cursor-pointer">
                <PencilIcon
                  onClick={() => {
                    setCurrentUld(uld);
                    setEditMode();
                  }}
                />
              </div>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="mb-6 overflow-hidden rounded shadow">
        <Table
          //@// eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          columns={columns}
          emptyText="No Services available"
          data={uld!}
          rowKey="id"
          scroll={{ x: 1000 }}
          expandable={{
            expandedRowRender: () => '',
            rowExpandable: rowExpandable,
          }}
        />
        <Button
          variant="outline"
          onClick={() => closeCheckbookModal()}
          className="me-4"
          type="button"
        >
          Go Back
        </Button>
      </div>
      {/* 
      {!!paginatorInfo?.total && (
        <div className="flex items-center justify-end">
          <Pagination
            total={paginatorInfo?.total}
            current={paginatorInfo?.currentPage}
            pageSize={paginatorInfo?.perPage}
            onChange={onPagination}
          />
        </div>
      )} */}
    </>
  );
};

export default CheckbookUldList;
