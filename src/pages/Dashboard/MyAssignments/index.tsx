import React from 'react'
import { useQuery } from 'react-query'
import { getMyAssignments } from '../../../apis/assignmentApi'
import Loading from '../../../components/Loading'

function MyAssignments() {
  const { isLoading, data } = useQuery('getAssignments', getMyAssignments)
  console.log(data)
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <ul>{data ? data.data.map((item: any) => <li key={item._id}>{item.content}</li>) : 'No Data'}</ul>
    </div>
  )
}

export default MyAssignments
