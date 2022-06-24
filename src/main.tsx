import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { BrowserRouter } from 'react-router-dom'

import './styles/global.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
