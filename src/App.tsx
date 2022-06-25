import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Platform } from './pages/Platform'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/platform/lesson/:slug" element={<Platform />} />
    </Routes>
  )
}

export default App
