
import { Table } from '@/components/ui/table';
import ActionButtons from '@/components/common/action-buttons';
import { Customer, Services, SortOrder } from '@/types';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useRouter } from 'next/router';

type IProps = {
  customers: Customer[] | undefined;
  // paginatorInfo: MappedPaginatorInfo | null;
  // onPagination: (current: number) => void;
  // onSort: (current: any) => void;
  // onOrder: (current: string) => void;
};

const CustomersList = ({
  customers,
  // paginatorInfo,
  // onPagination,
  // onSort,
  // onOrder,
}: IProps) => {
  // const { data, paginatorInfo } = orders! ?? {};
  const router = useRouter();
  const { t } = useTranslation();
  const rowExpandable = (record: any) => record.children?.length;

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
      title: "name",
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: (name: any, customers: Customer) => {
        return (
          <div className="w-max">
            {name}
          </div>
        )
      }
    },
    {
      title: "email",
      dataIndex: 'email',
      key: 'email',
      align: 'center',
      render: (email: any, customers: Customer) => {
        return (
          <div className="w-max">
            {email}
          </div>
        )
      }
    },
    {
      title: "clearanceFee",
      dataIndex: 'clearanceFee',
      key: 'clearanceFee',
      align: 'center',
    },
    {
      title: "airlineFee",
      dataIndex: 'airlineFee',
      key: 'airlineFee',
      align: 'center',
    },
    {
      title: "airwayBillPerPcs",
      dataIndex: 'airwayBillPerPcs',
      key: 'airwayBillPerPcs',
      align: 'center',
    },
    {
      title: "fteHandlingFee",
      dataIndex: 'fteHandlingFee',
      key: 'fteHandlingFee',
      align: 'center',
    },
    {
      title: "cfsRecoveryCharges",
      dataIndex: 'cfsRecoveryCharges',
      key: 'cfsRecoveryCharges',
      align: 'center',
    },
    {
      title: "fteMinWeight",
      dataIndex: 'fteMinWeight',
      key: 'fteMinWeight',
      align: 'center',
    },
    {
      title: "fteMinCharge",
      dataIndex: 'fteMinCharge',
      key: 'fteMinCharge',
      align: 'center',
    },
    {
      title: "cfsMinWeight",
      dataIndex: 'cfsMinWeight',
      key: 'cfsMinWeight',
      align: 'center',
    },
    {
      title: "cfsMinCharge",
      dataIndex: 'cfsMinCharge',
      key: 'cfsMinCharge',
      align: 'center',
    },
    {
      title: "Service",
      dataIndex: 'service',
      key: 'service',
      align: 'center',
      render: (service: any, customers: Customer) => {
        return (
          <div className="w-max">
            {service.code}
          </div>
        )
      }
    },

    {
      title: "Actions",
      dataIndex: 'id',
      key: 'actions',
      align: 'center',
      width: 150,
      render: (id: string, services: Services) => {
        return (
          <ActionButtons
            id={id}
            editUrl={`${router.asPath}/${id}`}
            deleteModalView="DELETE_CUSTOMER"
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
          emptyText="No customers available"
          data={customers}
          rowKey="id"
          scroll={{ x: 1000 }}
          expandable={{
            expandedRowRender: () => '',
            rowExpandable: rowExpandable,
          }}
        />
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

export default CustomersList;
