import "@/styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Hostel Finder App</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
  );
}
