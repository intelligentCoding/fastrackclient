import Layout from '@/components/layouts/admin';
// import CreateOrUpdateCategoriesForm from '@/components/category/category-form';
import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { allowedRoles, getAuthCredentials, hasAccess, isAuthenticated } from '@/utils/auth-utils';
import { Routes } from '@/config/routes';
import { useRouter } from 'next/router';
import Loader from '@/components/ui/loader/loader';
import ErrorMessage from '@/components/ui/error-message';
import { useAirportQuery } from '@/data/airports';
import CreateOrUpdateAirport from '@/components/airports/airport-form';

export default function CreateCategoriesPage() {
  const { query } = useRouter();
  const {
    airport,
    isLoading: loading,
    error,
  } = useAirportQuery({
    id: query.id as string
  });

  if (loading) return <Loader text="Loading Airport" />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <div className="flex border-b border-dashed border-border-base py-5 sm:py-8">
        <h1 className="text-lg font-semibold text-heading">
          Edit Airport
        </h1>
      </div>
      <CreateOrUpdateAirport initialValues={airport} />
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