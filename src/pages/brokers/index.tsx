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
import { useContext, useEffect, useState } from 'react';
import { WebsocketContext } from '@/context/WebsocketContext';
const Brokers = dynamic(() => import('@/components/brokers/brokers'));
type MessagePayload = {
  content: string;
  msg: string;
};
export default function Service({
  userPermissions,
}: {
  userPermissions: string[];
}) {
  const socket = useContext(WebsocketContext);
  const [value, setValue] = useState('');
    const [messages, setMessages] = useState<MessagePayload[]>([]);
  useEffect(() => {
    console.log("-------")
    socket.on('connect', () => {
      console.log('Connected!');
    });
    socket.on('onMessage', (newMessage: MessagePayload) => {
      console.log('onMessage event received!');
      console.log(newMessage);
      setMessages((prev) => [...prev, newMessage]);
    });
    return () => {
      console.log('Unregistering Events...');
      socket.off('connect');
      socket.off('onMessage');
    };
  }, []);
  if (userPermissions?.includes(ADMIN)) {

    return <Brokers />;
  }
}

Service.Layout = AppLayout;

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
