import { useEffect } from 'react'
import { RouteProps, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

interface ProtectedRouteProps extends RouteProps {
  component: JSX.Element
}

export const ProtectedRoute = ({ component }: ProtectedRouteProps) => {
  const navigate = useNavigate()
  const { isAuthenticated, isLoadingApplication } = useAuth()

  useEffect(() => {
    if (isLoadingApplication === false && !isAuthenticated) navigate('/')
  }, [isLoadingApplication, isAuthenticated])

  return (
    <>{isLoadingApplication === false && isAuthenticated ? component : null}</>
  )
}
