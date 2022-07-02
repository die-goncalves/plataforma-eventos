import { Route, Routes } from 'react-router-dom'
import { Challenge } from './pages/Challenge'
import { Home } from './pages/Home'
import { Platform } from './pages/Platform'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/platform/lesson/:slug" element={<Platform />} />
      <Route path="/platform/lesson/:slug/challenge" element={<Challenge />} />
    </Routes>
  )
}

export default App
