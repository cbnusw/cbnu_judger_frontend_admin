import axios from 'axios'
import { backUrl } from '../config/config'

axios.defaults.baseURL = backUrl
export const getMyAssignments = () => axios.get(`/assignment`)

export const getProblems = (assignmentId: string) => axios.get(`/problems/${assignmentId}`)

export const getSubmitCodes = (assignmentId: string, problemId: string) =>
  axios.get(`/submits/${assignmentId}/${problemId}`)
