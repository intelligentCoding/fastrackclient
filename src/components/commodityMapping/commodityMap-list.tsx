import { Table } from '@/components/ui/table';
import ActionButtons from '@/components/common/action-buttons';

import { CommodityMapping, Services, SortOrder } from '@/types';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useRouter } from 'next/router';

type IProps = {
  commodityMap: CommodityMapping[] | undefined;
  // paginatorInfo: MappedPaginatorInfo | null;
  // onPagination: (current: number) => void;
  // onSort: (current: any) => void;
  // onOrder: (current: string) => void;
};

const CommodityMapList = ({
  commodityMap,
}: // paginatorInfo,
// onPagination,
// onSort,
// onOrder,
IProps) => {
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
      title: 'Mapped from',
      dataIndex: 'mappedFrom',
      key: 'mappedFrom',
      align: 'center',
      width: 150,
    },
    {
      title: 'Mapped To',
      dataIndex: 'mappedTo',
      key: 'MappedTo',
      align: 'center',
    },

    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'actions',
      align: 'center',
      width: 100,
      render: (id: string, commodityMap: CommodityMapping) => {
        return (
          <ActionButtons
            id={id}
            editUrl={`${router.asPath}/${id}`}
            deleteModalView="DELETE_COMMODITY_MAP"
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
          data={commodityMap!}
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

export default CommodityMapList;
