import { Table } from '@/components/ui/table';
import ActionButtons from '@/components/common/action-buttons';

import { Checkbook } from '@/types';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useRouter } from 'next/router';

type IProps = {
  checkbook: Checkbook[] | undefined;
};

const CommodityMapList = ({ checkbook }: IProps) => {
  // const { data, paginatorInfo } = orders! ?? {};
  const router = useRouter();
  const { t } = useTranslation();
  const rowExpandable = (record: any) => record.children?.length;

  //   const [sortingObj, setSortingObj] = useState<{
  //     sort: SortOrder;
  //     column: string | null;
  //   }>({
  //     sort: SortOrder.Desc,
  //     column: null,
  //   });

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
      title: 'Pay',
      dataIndex: 'pay',
      key: 'id',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.pay}
            editCheckbookLabel={'Pay'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'ISC',
      dataIndex: 'isc',
      key: 'isc',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.isc}
            editCheckbookLabel={'ISC'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Paid To',
      dataIndex: 'paidTo',
      key: 'paidTo',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.paidTo}
            editCheckbookLabel={'Paid To'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.date}
            editCheckbookLabel={'Date'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Run Number',
      dataIndex: 'runNumber',
      key: 'runNumber',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.runNumber}
            editCheckbookLabel={'Run Number'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Master',
      dataIndex: 'masterV1',
      key: 'masterV1',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.masterV1}
            editCheckbookLabel={'Master'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Master',
      dataIndex: 'masterV2',
      key: 'masterV2',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.masterV2}
            editCheckbookLabel={'Master'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Flight',
      dataIndex: 'flight',
      key: 'flight',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.flight}
            editCheckbookLabel={'Flight'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.status}
            editCheckbookLabel={'Status'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Arrival Date',
      dataIndex: 'arrivalDate',
      key: 'arrivalDate',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.arrivalDate}
            editCheckbookLabel={'Arrival Date'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Pickup Date',
      dataIndex: 'pickupDate',
      key: 'pickupDate',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.pickupDate}
            editCheckbookLabel={'Pickup Date'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Bags',
      dataIndex: 'bags',
      key: 'bags',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.bags}
            editCheckbookLabel={'Bags'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.weight}
            editCheckbookLabel={'Weight'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'ULD/AKE/PMC',
      dataIndex: 'pmc',
      key: 'pmc',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.pmc}
            editCheckbookLabel={'ULD/AKE/PMC'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Exam',
      dataIndex: 'exam',
      key: 'exam',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.exam}
            editCheckbookLabel={'Exam'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'P/O',
      dataIndex: 'p_o',
      key: 'p_o',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.p_o}
            editCheckbookLabel={'P/O'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Remarks',
      dataIndex: 'remarks',
      key: 'remarks',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.remarks}
            editCheckbookLabel={'Remarks'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
        );
      },
    },
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
      align: 'center',
      width: 150,
      render: (id: string, checkbook: Checkbook) => {
        return (
          <ActionButtons
            id={checkbook.id}
            checkbookEditData={checkbook.label}
            editCheckbookLabel={'Label'}
            editCheckbookModalView="EDIT_CHECKBOOK"
          />
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
          data={checkbook!}
          rowKey="id"
          scroll={{ x: 2000 }}
          expandable={{
            expandedRowRender: () => '',
            rowExpandable: rowExpandable,
          }}
        />
      </div>
    </>
  );
};

export default CommodityMapList;
