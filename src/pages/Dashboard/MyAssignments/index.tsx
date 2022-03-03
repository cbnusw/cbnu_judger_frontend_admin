import React from 'react'
import { useQuery } from 'react-query'
import { getMyAssignments } from '../../../apis/assignmentApi'
import Loading from '../../../components/Loading'
import VirtualList from 'rc-virtual-list'
import { List } from 'antd'
import ListItem from '../../../components/ListItem'
function MyAssignments() {
  const { isLoading, data } = useQuery('getAssignments', () => getMyAssignments())

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <List>{(data: any) => <ListItem item={data} />}</List>
    </div>
  )
}

export default MyAssignments
