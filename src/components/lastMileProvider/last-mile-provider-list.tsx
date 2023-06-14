
import { Table } from '@/components/ui/table';
import ActionButtons from '@/components/common/action-buttons';

import { LastMileProviders, SortOrder } from '@/types';
import { useTranslation } from 'next-i18next';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type IProps = {
  lastMileProviders: LastMileProviders[] | undefined;
  // paginatorInfo: MappedPaginatorInfo | null;
  // onPagination: (current: number) => void;
  // onSort: (current: any) => void;
  // onOrder: (current: string) => void;
};
type MessagePayload = {
  content: string;
  msg: string;
};
const LastMileProvidersList = ({
  lastMileProviders,
  // paginatorInfo,
  // onPagination,
  // onSort,
  // onOrder,
}: IProps) => {
  // const { data, paginatorInfo } = orders! ?? {};
  const router = useRouter();
  const { t } = useTranslation();
  const rowExpandable = (record: any) => record.children?.length;
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<MessagePayload[]>([]);

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
      width: 150,
    },
    {
      title: "code",
      dataIndex: 'code',
      key: 'code',
      align: 'center',
    },
    {
      title: "email",
      dataIndex: 'email',
      key: 'email',
      align: 'center',
    },

    {
      title: "Actions",
      dataIndex: 'id',
      key: 'actions',
      align: 'center',
      width: 100,
      render: (id: string, lastMileProviders: LastMileProviders) => {
        return (
          <ActionButtons
            id={id}
            editUrl={`${router.asPath}/${id}`}
            deleteModalView="DELETE_LAST_MILE_PROVIDER"
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
          data={lastMileProviders!}
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

export default LastMileProvidersList;
