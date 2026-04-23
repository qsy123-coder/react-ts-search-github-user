import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";
import { CombinedGraphQLErrors } from "@apollo/client/errors";

import { onError } from "@apollo/client/link/error";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

const errorLink = onError(({ error }) => {
  if (CombinedGraphQLErrors.is(error)) {
    error.errors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
    return;
  }

  if (error) {
    console.error(`[Network error]: ${error.message}`);
  }
});

const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
