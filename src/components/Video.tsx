import { gql, useQuery } from '@apollo/client'
import { DefaultUi, Player, Youtube } from '@vime/react'
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Image
} from 'phosphor-react'

import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonByString($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      description
      videoId
      teacher {
        avatarURL
        name
        bio
      }
    }
  }
`

type GetLessonBySlugQueryResponse = {
  lesson: {
    title: string
    description: string
    videoId: string
    teacher: {
      avatarURL: string
      name: string
      bio: string
    }
  }
}

type VideoProps = {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugQueryResponse>(
    GET_LESSON_BY_SLUG_QUERY,
    { variables: { slug: props.lessonSlug } }
  )

  if (!data) {
    return <div className="flex-1"></div>
  }
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="px-8 pt-8 max-w-[1100px] mx-auto">
        <div className="flex gap-[60px] ">
          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-[1.5rem] font-bold text-gray-100">
              {data.lesson.title}
            </h1>
            <p className="text-[1rem] text-gray-200 leading-[1.6]">
              {data.lesson.description}
            </p>

            <div className="mt-6 flex items-center">
              <img
                className="w-16 h-16 rounded-full border-2 border-solid border-blue-500 object-cover"
                src={data.lesson.teacher.avatarURL}
                alt={data.lesson.teacher.name}
              />
              <div className="ml-[1.125rem]">
                <p className="text-[1.5rem] text-gray-100 font-bold">
                  {data.lesson.teacher.name}
                </p>
                <span className="text-[0.875rem] text-[#A8A8B3] leading-[1.6]">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex px-6 py-4 items-center justify-center text-white bg-green-500 rounded hover:bg-green-700 transition-all duration-200 ease-out"
            >
              <DiscordLogo className="w-6 h-6" />
              <span className="ml-2.5 text-[0.875rem] font-bold">
                COMUNIDADE NO DISCORD
              </span>
            </a>
            <a
              href="#"
              className="flex px-6 py-4 items-center justify-center text-blue-500 hover:text-gray-900 ring-[1px] ring-inset ring-blue-500 hover:bg-blue-500 rounded transition-all duration-200 ease-out"
            >
              <Lightning className="w-6 h-6" />
              <span className="ml-2.5 text-[0.875rem] font-bold">
                ACESSE O DESAFIO
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 my-20 gap-8">
          <a
            href="#"
            className="flex items-center justify-center overflow-hidden rounded bg-gray-700 hover:bg-[#202024] transition-all duration-200 ease-out"
          >
            <div className="flex h-full items-center justify-center bg-green-700 p-6">
              <FileArrowDown className="w-10 h-10 text-white" />
            </div>

            <div className="flex flex-col gap-2 pl-6 py-6">
              <span className="ml-2.5 text-[1.5rem] text-gray-100 font-bold">
                Material complementar
              </span>
              <span className="ml-2.5 text-[0.875rem] text-gray-200 leading-[1.6]">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </span>
            </div>

            <div className="flex h-full items-center justify-center p-6">
              <CaretRight className="w-6 h-6 text-blue-500" />
            </div>
          </a>

          <a
            href="#"
            className="flex items-center justify-center overflow-hidden rounded bg-gray-700 hover:bg-[#202024] transition-all duration-200 ease-out"
          >
            <div className="flex h-full items-center justify-center bg-green-700 p-6">
              <Image className="w-10 h-10 text-white" />
            </div>

            <div className="flex flex-col gap-2 pl-6 py-6">
              <span className="ml-2.5 text-[1.5rem] text-gray-100 font-bold">
                Wallpapers do evento
              </span>
              <span className="ml-2.5 text-[0.875rem] text-gray-200 leading-[1.6]">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </span>
            </div>
            <div className="flex h-full items-center justify-center p-6">
              <CaretRight className="w-6 h-6 text-blue-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
