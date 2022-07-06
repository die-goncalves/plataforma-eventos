import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Presentation } from '../components/Presentation'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

type Params = {
  slug: string
}

export function Platform() {
  const { slug } = useParams<Params>()
  const [activeNavLessons, setActiveNavLessons] = useState<boolean>(false)

  return (
    <div
      className="flex h-screen w-screen scrollbar"
      style={{ scrollbarGutter: 'stable', overflow: 'auto' }}
    >
      <div className="flex flex-1 flex-col mx-auto max-w-[1440px]">
        <Header
          setActiveNavLessons={setActiveNavLessons}
          activeNavLessons={activeNavLessons}
        />
        <main className="relative flex flex-1">
          <div className="relative z-0 flex flex-1 flex-col">
            {!activeNavLessons &&
              (slug ? <Video lessonSlug={slug} /> : <Presentation />)}

            <Footer />
          </div>

          <Sidebar activeNavLessons={activeNavLessons} />
        </main>
      </div>
    </div>
  )
}
