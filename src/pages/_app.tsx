import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/css/main.css';
import { UIProvider } from '@/contexts/ui.context';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';
import type { NextPageWithLayout } from '@/types';
import PrivateRoute from '@/utils/private-route';
import { ModalProvider } from '@/components/ui/modal/modal.context';
import ManagedModal from '@/components/ui/modal/managed-modal';
import { socket, WebsocketProvider } from '@/context/WebsocketContext';

const Noop: React.FC = ({ children }) => <>{children}</>;

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = (Component as any).Layout || Noop;
  const authProps = (Component as any).authenticate;
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <WebsocketProvider value={socket}>
        <Hydrate state={pageProps.dehydratedState}>
          <UIProvider>
            <ModalProvider>
              <>
                {authProps ? (
                  <PrivateRoute authProps={authProps}>
                    <Layout {...pageProps}>
                      <Component {...pageProps} />
                    </Layout>
                  </PrivateRoute>
                ) : (
                  <Layout {...pageProps}>
                    <Component {...pageProps} />
                  </Layout>
                )}
                <ToastContainer autoClose={2000} theme="colored" />
                <ManagedModal />
              </>
            </ModalProvider>
          </UIProvider>
          <ReactQueryDevtools />
        </Hydrate>
      </WebsocketProvider>
    </QueryClientProvider>
  );
};

export default CustomApp;
