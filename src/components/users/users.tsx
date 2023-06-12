import { Routes } from "@/config/routes";
import { Menu, Transition } from "@headlessui/react";
import Card from "../common/card";
import LinkButton from "../ui/link-button";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import classNames from "classnames";
import UserList from "./user-list";
import { useUsersQuery } from "@/data/users";
import { SortOrder } from "@/types";
import Loader from "../ui/loader/loader";
import ErrorMessage from "../ui/error-message";

export default function Users() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    // const [page, setPage] = useState(1);
    const [orderBy, setOrder] = useState('');
    const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);
    const { users, loading: fetchingBrokers, error } = useUsersQuery ({
        firstName: searchTerm,
        orderBy,
        sortedBy,
      });

      if (fetchingBrokers) return <Loader text="Loading Users" />;
      const userList = users.filter((user:any)=>{
        const userRoles= user.userRole.map((roles:any)=> roles.role.name )
        const result = user.role = userRoles.map((role:any)=> role).join(" | ")
        return result
      })

      if (error) return <ErrorMessage message={error.message} />

    return (
        <>
            <Card className="mb-8 flex flex-col items-center justify-between md:flex-row">
                <div className="mb-4 md:mb-0 md:w-1/4">
                    <h1 className="text-lg font-semibold text-heading">
                        Users
                    </h1>
                </div>

                <Menu
                    as="div"
                    className="relative inline-block ltr:text-left rtl:text-right"
                >
                    <LinkButton
                        href={`/${Routes.users}/create`}
                        className="h-12 ms-4 md:ms-6"
                    >
                        <span>
                            + Add User
                        </span>
                    </LinkButton>
                </Menu>
            </Card>
            {
                users && (

                    <UserList
                        users={userList || []}
                    // paginatorInfo={paginatorInfo}
                    // onPagination={handlePagination}
                    // onOrder={setOrder}
                    // onSort={setColumn}
                    />
                )
            }
        </>
    )
}