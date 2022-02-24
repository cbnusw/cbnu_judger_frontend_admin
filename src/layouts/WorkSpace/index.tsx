import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { Redirect } from 'react-router-dom'
import { getMyInfo } from '../../apis/authApi'
import Menu from '../../components/menu'
const WorkSpace: FC = ({ children }) => {
  const { isError, data, refetch } = useQuery('getMyInfo', getMyInfo, {
    enabled: false,
  })
  if (!data) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}
export default WorkSpace
