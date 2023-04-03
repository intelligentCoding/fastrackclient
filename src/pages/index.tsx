import dynamic from 'next/dynamic';
import type { GetServerSideProps } from 'next';
import {
  allowedRoles,
  getAuthCredentials,
  hasAccess,
  isAuthenticated,
} from '@/utils/auth-utils';
import { ADMIN, OFFICE, VIEW } from '@/utils/constants';
import AppLayout from '@/components/layouts/app';
import { Routes } from '@/config/routes';

const AdminDashboard = dynamic(() => import('@/components/dashboard/admin'));

export default function Dashboard({
  userPermissions,
}: {
  userPermissions: string[];
}) {
  if (userPermissions?.includes(ADMIN)) {
    return <AdminDashboard />;
  }
}

Dashboard.Layout = AppLayout;

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
