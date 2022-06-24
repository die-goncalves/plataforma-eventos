import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

type Params = {
  slug: string
}

export function Platform() {
  const { slug } = useParams<Params>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <div className="flex flex-1 flex-col">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}

          <Footer />
        </div>

        <Sidebar />
      </main>
    </div>
  )
}
