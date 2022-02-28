import React from 'react'
import { useQuery } from 'react-query'
import { getProblems } from '../../apis/assignmentApi'

function ProblemList() {
  const { data, isLoading, isError } = useQuery('getProblems', (assignmentId: any) => getProblems(assignmentId))
  return (
    <div>
      <ul>
        <li>Hi</li>
      </ul>
    </div>
  )
}
