import dynamic from 'next/dynamic';
import type { GetServerSideProps } from 'next';
import {
    allowedRoles,
    getAuthCredentials,
    hasAccess,
    isAuthenticated,
} from '@/utils/auth-utils';
import { ADMIN } from '@/utils/constants';
import AppLayout from '@/components/layouts/app';
import { Routes } from '@/config/routes';

const CreateOrUpdateUsers = dynamic(() => import('@/components/users/user-form'));


export default function User({
    userPermissions,
}: {
    userPermissions: string[];
}) {
    if (userPermissions?.includes(ADMIN)) {
        return <CreateOrUpdateUsers />;
    }
}

User.Layout = AppLayout;

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