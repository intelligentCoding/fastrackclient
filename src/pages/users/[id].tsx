import Layout from '@/components/layouts/admin';
import type { GetServerSideProps } from 'next';
import { allowedRoles, getAuthCredentials, hasAccess, isAuthenticated } from '@/utils/auth-utils';
import { Routes } from '@/config/routes';
import { useRouter } from 'next/router';
import Loader from '@/components/ui/loader/loader';
import ErrorMessage from '@/components/ui/error-message';
import dynamic from 'next/dynamic';
import { useBrokerQuery } from '@/data/broker';

const CreateOrUpdateUsers = dynamic(() => import('@/components/users/user-form'));

export default function CreateCategoriesPage() {
    // const { query } = useRouter();
    // const {
    //   broker,
    //   isLoading: loading,
    //   error,
    // } = useBrokerQuery({
    //   id: query.id as string
    // });

    const dummyData = {
        email: "test1@gmail.com",
        firstName: "test",
        lastName: "demo",
        role: "user"
    }

    // if (loading) return <Loader text="Loading Airport" />;
    // if (error) return <ErrorMessage message={error.message} />;
    return (
        <>
            <div className="flex border-b border-dashed border-border-base py-5 sm:py-8">
                <h1 className="text-lg font-semibold text-heading">
                    Edit User
                </h1>
            </div>
            <CreateOrUpdateUsers initialValues={dummyData} />
        </>
    );
}

CreateCategoriesPage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // TODO: Improve it
    const { token, permissions } = getAuthCredentials(ctx);
    if (
      !isAuthenticated({ token, permissions }) ||
      !hasAccess(allowedRoles, permissions)
    ) {
      return {
        redirect: {
          destination: Routes.login,
          permanent: false,
        },
      };
    }
    return {
      props: {
        userPermissions: permissions,
      },
    };
  };

