export type role = 'admin' | 'operator' | 'student' | 'staff' | 'member'

export interface User {
  permissions: Array<string>
  _id: string
  no: string
  role: role
  __v: number
  info: UserInfo
}

export interface UserInfo {
  _id: string
  no: string
  email: string
  name: string
  phone: string
  department: string
  role: role
  joinedAt: Date
  updatedAt: Date
  __v: number
}

export interface writer extends UserInfo {
  center: null | string
  permissions: Array<string>
}

export interface MyAssignmentsData {
  total: number
  page: number
  limit: null
  documents: Array<assignment>
}

export type problems = Array<string>
export type students = Array<object>

export interface assignment {
  problems: problems
  students: students
  _id: string
  title: string
  course: string
  content: string
  testPeriod: {
    start: Date
    end: Date
  }
  writer: writer
  createdAt: Date
  updatedAt: Date
  __v: number
}
