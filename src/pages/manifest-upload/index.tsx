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
import { WebsocketContext } from '@/context/WebsocketContext';
import { useContext, useEffect, useState } from 'react';

const UploadManifest = dynamic(() => import('@/components/upload-file/UploadManifest'));
type MessagePayload = {
  content: string;
  msg: string;
};
export default function Upload({
  userPermissions,
}: {
  userPermissions: string[];
}) {
  if (userPermissions?.includes(ADMIN)) {
  //   const socket = useContext(WebsocketContext);
  //   const [value, setValue] = useState('');
  //     const [messages, setMessages] = useState<MessagePayload[]>([]);
  //   useEffect(() => {
  //     socket.on('connect', () => {
  //       // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // // @ts-ignore
  //       console.log("connected")
  //     });
  //     socket.on('onMessage', (newMessage: MessagePayload) => {
  //       setMessages((prev) => [...prev, newMessage]);
  //     });
  //     return () => {
  //       socket.off('connect');
  //       socket.off('onMessage');
  //     };
  //   }, []);
  //   console.log(messages)
    return (
      <UploadManifest />
    )
  }
}

Upload.Layout = AppLayout;

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
