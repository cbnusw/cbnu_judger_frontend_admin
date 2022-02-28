import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { Redirect, Switch, Route } from 'react-router-dom'
import { getMyInfo } from '../../apis/authApi'
import Menu from '../../components/menu'
import MyAssignments from '../../pages/Dashboard/MyAssignments'
import Enroll from '../../pages/Enroll'

const DashBoard: FC = () => {
  const { data } = useQuery('getMyInfo', getMyInfo)
  if (!data) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/dashboard/myassignments" component={MyAssignments} />
        <Route path="/dashboard/enroll" component={Enroll} />
      </Switch>
    </div>
  )
}
export default DashBoard
