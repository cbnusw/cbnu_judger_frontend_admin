import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Enroll from '../../../pages/Enroll'
import Menu from '../../components/menu'
import useAuth from '../../hooks/useAuth'
const WorkSpace: FC = ({ children }) => {
  const { isAuthenticated }: any = useAuth()
  if (!isAuthenticated) {
    return <Redirect to="login" />
  }
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}
export default WorkSpace
