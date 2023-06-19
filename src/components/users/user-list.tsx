import { SortOrder, Users } from "@/types"
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import ActionButtons from "../common/action-buttons";
import Table from "rc-table";

type IProps = {
    users: Users[] | undefined
}

type MessagePayload = {
    content: string;
    msg: string;
};

const UserList = ({ users }: IProps) => {
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

    const columns = [
        {
            title: "First Name",
            dataIndex: 'first_name',
            key: 'nam1e',
            align: 'center',
            width: 150,
        },
        {
            title: "Last Name",
            dataIndex: 'last_name',
            key: 'nam1e',
            align: 'center',
            width: 150,
        },
        {
            title: "email",
            dataIndex: 'email',
            key: 'email',
            align: 'center',
        },
        {
            title: "role",
            dataIndex: 'role',
            key: 'role',
            align: 'center',
        },

        {
            title: "Actions",
            dataIndex: 'id',
            key: 'actions',
            align: 'center',
            width: 100,
            render: (id: string, users: Users) => {
                return (
                    <ActionButtons
                        id={id}
                        editUrl={`${router.asPath}/${id}`}
                        deleteModalView="DELETE_BROKER"
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
                    data={users!}
                    rowKey="id"
                    scroll={{ x: 1000 }}
                    expandable={{
                        expandedRowRender: () => '',
                        rowExpandable: rowExpandable,
                    }}
                />
            </div>
        </>
    )
}

export default UserList;