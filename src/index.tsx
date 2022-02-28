import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './layouts/App/App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const client = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
