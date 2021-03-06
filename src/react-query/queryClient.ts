import { notification } from 'antd'
import { QueryClient } from 'react-query'

const toast = ({ title, description }) => {
  notification.info({
    message: title,
    description: description,
  })
}

function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const description = error instanceof Error ? error.message : 'error connecting to server'

  // prevent duplicate toasts

  toast({ title: 'Error', description })
}

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 600000, // 10 minutes
        cacheTime: 900000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  })
}

export const queryClient = generateQueryClient()
