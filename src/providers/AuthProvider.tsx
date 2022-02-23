import axios, { AxiosRequestConfig } from 'axios'
import React, { useRef, useState, useEffect, createContext } from 'react'
import { useMutation } from 'react-query'
import { loginRequest, refreshRequest } from '../apis/authApi'
import { configure } from 'axios-hooks'

export const AuthContext = createContext(false)

export function AuthProvider(props: any) {
  const accessTokenRef = useRef<string>()
  const [tokenExpires, setTokenExpires] = useState<string | undefined>('')

  const logInQuery = useMutation(loginRequest, {
    onSuccess: (data) => {
      accessTokenRef.current = data.accessToken
      setTokenExpires(data.tokenExpires)
    },
  })

  const refreshQuery = useMutation(refreshRequest, {
    onSuccess: (data) => {
      accessTokenRef.current = data.accessToken
      setTokenExpires(data.tokenExpires)
    },
  })

  useEffect(() => {
    // add authorization token to each request
    axios.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
      //   config.headers.authorization = `Bearer ${accessTokenRef.current}`
      // this is important to include the cookies when we are sending the requests to the backend.
      config.withCredentials = true
      return config
    })

    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        return Promise.reject(error)
      }
    )

    // configure axios-hooks to use this instance of axios
    configure({ axios })
  }, [])
  const isSuccess = logInQuery.isSuccess || refreshQuery.isSuccess
  const isAuthenticated = isSuccess && !!accessTokenRef.current
  return <AuthContext.Provider value={props}></AuthContext.Provider>
}
