import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvide'

export const useAuth = () => useContext(AuthContext)
