import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('AuthContext must be within AuthProvider')
  }

  return context
}

export default useAuth
