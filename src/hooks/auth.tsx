import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { verifyJWT } from '../utils/handlejwt'
import Cookies from 'js-cookie'

type Subscriber = {
  name: string
  email: string
}

type AuthContextData = {
  verifyAuth: () => Promise<Subscriber | undefined>
  setIsAuthenticated: (state: boolean) => void
  isAuthenticated: boolean
  isLoadingApplication: boolean | undefined
  subscriber: Subscriber | undefined
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [subscriber, setSubscriber] = useState<Subscriber>()
  const [isLoadingApplication, setIsLoadingApplication] = useState<
    boolean | undefined
  >()

  useEffect(() => {
    async function isItSigned() {
      const payload = await verifyAuth()
      if (payload) {
        setSubscriber(payload)
      }
    }

    isItSigned()
  }, [])

  async function verifyAuth() {
    try {
      setIsLoadingApplication(true)
      const jwt = Cookies.get('IgniteLabPlatformByDie_token')

      if (jwt) {
        const payload = await verifyJWT({ jwt })

        setIsAuthenticated(true)
        setIsLoadingApplication(false)
        return payload
      }
      setIsLoadingApplication(false)
      return
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        setIsAuthenticated,
        verifyAuth,
        isAuthenticated,
        isLoadingApplication,
        subscriber
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
