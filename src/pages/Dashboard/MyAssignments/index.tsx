import React from 'react'
import { useQuery } from 'react-query'

function MyAssignments() {
  const { isLoading, data } = useQuery('getAssignments', fetchGetMyAssignments)
  return <div>MyAssignments</div>
}

export default MyAssignments
