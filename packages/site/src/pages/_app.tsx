import '../styles/global.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';

import { GRAPHQL_NEXT_JS_ROUTE } from '@/utils/consts';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const client = new ApolloClient({
  uri: GRAPHQL_NEXT_JS_ROUTE,
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);
export default MyApp;
