import { useEffect, useState } from 'react'
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
  const [activeNavLessons, setActiveNavLessons] = useState<boolean>(false)

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, [])

    return null
  }

  return (
    <div
      className="flex flex-col h-screen scrollbar mx-auto max-w-[1920px]"
      style={{ scrollbarGutter: 'stable', overflow: 'auto' }}
    >
      <ScrollToTopOnMount />
      <Header
        setActiveNavLessons={setActiveNavLessons}
        activeNavLessons={activeNavLessons}
      />
      <main className="relative flex flex-1">
        <div className="relative z-0 flex flex-1 flex-col">
          {!activeNavLessons &&
            (slug ? (
              <Video lessonSlug={slug} />
            ) : (
              <div className="bg-black w-full h-full"></div>
            ))}

          <Footer />
        </div>

        <Sidebar activeNavLessons={activeNavLessons} />
      </main>
    </div>
  )
}
