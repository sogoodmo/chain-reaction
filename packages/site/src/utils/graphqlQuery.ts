import { ApolloClient, InMemoryCache } from '@apollo/client';

import { GRAPHQL_NEXT_JS_ROUTE } from './consts';

const client = new ApolloClient({
  uri: GRAPHQL_NEXT_JS_ROUTE,
  cache: new InMemoryCache(),
});

export function makeQuery<QueryRV, Variables>(
  query: any,
  variables: Variables
): Promise<QueryRV> {
  return client.query({ query, variables }).then((res) => res.data) as any;
}
