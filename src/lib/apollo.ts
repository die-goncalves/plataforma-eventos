import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: `${import.meta.env.VITE_URI_GRAPHCMS}`,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}` },
  cache: new InMemoryCache()
})
