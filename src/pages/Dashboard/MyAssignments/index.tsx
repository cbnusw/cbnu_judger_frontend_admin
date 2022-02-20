import React from 'react'
import { useQuery } from 'react-query'
import { getMyAssignments } from '../../../apis/assignmentApi'

function MyAssignments() {
  const { isLoading, data } = useQuery('getAssignments', getMyAssignments)
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <ul>{data ? data.data.map((item: any) => <li key={item._id}>{item.content}</li>) : 'No Data'}</ul>
    </div>
  )
}

export default MyAssignments
