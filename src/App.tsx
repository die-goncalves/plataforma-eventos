import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <div className="flex-1"></div>

        <Sidebar />
      </main>
    </div>
  )
}

export default App
