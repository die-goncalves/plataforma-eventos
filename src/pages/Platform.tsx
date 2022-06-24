import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export function Platform() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <div className="flex flex-1 flex-col">
          <div className="flex-1"></div>

          <Footer />
        </div>

        <Sidebar />
      </main>
    </div>
  )
}
