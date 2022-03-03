import axios from 'axios'
import { backUrl } from '../config/config'

export const getMyAssignments = () => axios.get(`${backUrl}/assignment/me`)

export const getAssignmentDetails = (assignmentId: string) => axios.get(`${backUrl}/assignment/${assignmentId}`)

export const getProblems = (assignmentId: string) => axios.get(`${backUrl}/problem/${assignmentId}`)

export const getProblemDetails = (assignmentId: string) => axios.get(`${backUrl}/problem/${assignmentId}`)

export const getSubmitCodes = (assignmentId: string, problemId: string) =>
  axios.get(`${backUrl}/submits/${assignmentId}/${problemId}`)

export const deleteProblem = (problemId: string) => axios.delete(`${backUrl}/problem/${problemId}`)
