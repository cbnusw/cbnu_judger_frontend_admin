import axios from 'axios'
import { backUrl } from '../../config/config'

axios.defaults.baseURL = backUrl

export const getMyAssignments = () => axios.get('/assignment/me')

export const getAssignmentDetails = (assignmentId: string) => axios.get(`/assignment/${assignmentId}`)

export const getProblems = (assignmentId: string) => axios.get(`/problem/${assignmentId}`)

export const getProblemDetails = (assignmentId: string) => axios.get(`/problem/${assignmentId}`)

export const getSubmitCodes = (assignmentId: string, problemId: string) =>
  axios.get(`/submits/${assignmentId}/${problemId}`)

export const deleteProblem = (problemId: string) => axios.delete(`/problem/${problemId}`)
