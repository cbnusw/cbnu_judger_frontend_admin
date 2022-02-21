import React from 'react'
import { useQuery } from 'react-query'
import { getProblems } from '../../apis/assignmentApi'
function ProblemCard() {
  const { isLoading, isError, data } = useQuery('getProblems', (id: any) => {
    getProblems(id)
  })
  return isLoading ? (
    <div>Loading....</div>
  ) : (
    <div>
      <ul>{data.data.problems.map((problem) => {})}</ul>
    </div>
  )
}

export default ProblemCard
