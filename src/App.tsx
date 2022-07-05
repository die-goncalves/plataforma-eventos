import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Challenge } from './pages/Challenge'
import { Home } from './pages/Home'
import { Platform } from './pages/Platform'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/platform"
        element={<ProtectedRoute component={<Platform />} />}
      />
      <Route
        path="/platform/lesson/:slug"
        element={<ProtectedRoute component={<Platform />} />}
      />
      <Route
        path="/platform/lesson/:slug/challenge"
        element={<ProtectedRoute component={<Challenge />} />}
      />
    </Routes>
  )
}

export default App
