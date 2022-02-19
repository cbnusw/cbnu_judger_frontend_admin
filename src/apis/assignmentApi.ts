import axios from 'axios'
import { backUrl } from '../config/config'

axios.defaults.baseURL = backUrl
export const getMyAssignments = (data, lastId) => axios.get(`/user/${data}/posts?lastId=${lastId || 0}`)

export const getProblems = (assignmentId) => axios.get(`/problems/${assignmentId}`)

export const getSubmitCodes = (assignmentId, problemId) => axios.get(`/submits/${assignmentId}/${problemId}`)
