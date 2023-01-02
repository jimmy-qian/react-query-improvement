import * as i from 'types';
import * as React from 'react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  type DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';

const App: React.VFC<Props> = ({
  Component,
  pageProps: { dehydrateState, session, ...pageProps },
}) => {
  const [isMounted, setIsMounted] = React.useState(false);

  // This ensures that data is not shared between different users and requests,
  // while still only creating the QueryClient once per component lifecycle.
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30 * 1000, // 30 seconds
            cacheTime: 1000 * 6 * 10, // 10 minutes
            retry: 1,
          },
        },
      }),
  );

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Enable CSR and prevent hydration issues
  if (!isMounted) {
    return null;
  }

  const getLayout = Component.layout || ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" sizes="192x192" href="/favicon.ico" />
      </Head>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        pauseOnHover
        draggable={false}
        transition={Slide}
        limit={5}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={dehydrateState}>
            <SessionProvider session={session}>
              {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
          </Hydrate>
          <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

type Props = Omit<AppProps, 'pageProps'> & {
  pageProps: i.AnyObject & {
    dehydrateState: DehydratedState;
    session: i.Session;
  };
  Component: i.NextPageComponent;
};

export default App;
