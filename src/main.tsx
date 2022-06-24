import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'

import './styles/global.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
