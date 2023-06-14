import Table from 'rc-table';
import React from 'react';
import Input from '@/components/ui/input';
import { CustomDescription, Description } from '@/types';
import { useForm } from 'react-hook-form';
import Button from '../ui/button';

type IProps = {
  descriptionList: Description[];
  updateHandler: (updatedDescription: CustomDescription[]) => void;
};

export default function DescriptionListTable({
  descriptionList,
  updateHandler,
}: IProps) {
  const { register, handleSubmit } = useForm();

  const columns = [
    {
      title: 'Desc Raw',
      dataIndex: 'descRaw',
      key: 'descRaw',
      align: 'center',
    },
    {
      title: 'Desc Process',
      dataIndex: 'descProcessed',
      key: 'descProcessed',
      align: 'center',
    },

    {
      title: 'Custome Value',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      render: (descriptionId: string) => (
        <Input {...register(descriptionId)} type="text" />
      ),
    },
  ];

  const onSubmit = (values: Record<string, string>) => {
    const updatedDescriptions = descriptionList.reduce(
      (acc: CustomDescription[], curr) => {
        if (values[curr.id] !== '') {
          acc = acc.concat([
            {
              descRaw: curr.descRaw,
              userEnteredValue: values[curr.id],
              descriptionId: curr.id,
            },
          ]);
        }
        return acc;
      },
      [],
    );

    updateHandler(updatedDescriptions);
  };

  return (
    <>
      <div className="my-6 flex items-center  justify-center lg:justify-end">
        <Button onClick={handleSubmit(onSubmit)} className="!block  h-12">
          Save
        </Button>
      </div>

      <div className="mb-6 overflow-hidden rounded shadow">
        <Table
          //@// eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          columns={columns}
          emptyText="No Descriptions available"
          data={descriptionList}
          rowKey="id"
          scroll={{ x: '100%' }}
        />
      </div>
    </>
  );
}
