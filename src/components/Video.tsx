import { DefaultUi, Player, Youtube } from '@vime/react'
import { useGetLessonBySlugQuery } from '../graphql/generated'
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Image
} from 'phosphor-react'

import '@vime/core/themes/default.css'

type VideoProps = {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: { slug: props.lessonSlug },
    fetchPolicy: 'no-cache'
  })

  if (!data || !data.lesson) {
    return <div className="flex-1 bg-black"></div>
  }
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[640px] aspect-video">
          <Player className="h-full w-full bg-black">
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="px-8 pt-8 mx-auto max-640px:px-6 max-640px:pt-6 sm:px-6 sm:pt-6">
        <div className="flex gap-[60px] max-640px:flex-col max-640px:gap-6 sm:flex-col sm:gap-6">
          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-[1.5rem] font-bold text-gray-100">
              {data.lesson.title}
            </h1>
            <p className="text-[1rem] text-gray-200 leading-[1.6]">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="mt-6 flex items-center sm:mt-0">
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
            )}
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

        <div className="grid grid-cols-2 my-20 gap-8 max-640px:grid-cols-1 max-640px:my-16 sm:grid-cols-1">
          <a
            href="#"
            className="flex items-center justify-center overflow-hidden rounded bg-gray-700 hover:bg-[#202024] transition-all duration-200 ease-out"
          >
            <div className="flex h-full items-center justify-center bg-green-700 p-6">
              <FileArrowDown className="w-10 h-10 text-white" />
            </div>

            <div className="flex flex-1 flex-col gap-2 pl-6 py-6 max-640px:py-4 max-640px:px-4 max-640px:gap-1">
              <span className="text-[1.5rem] text-gray-100 font-bold max-640px:text-[1.125rem]">
                Material complementar
              </span>
              <span className="text-[0.875rem] text-gray-200 leading-[1.6] max-640px:text-[0.75rem]">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </span>
            </div>

            <div className="flex h-full items-center justify-center p-6 max-640px:p-4">
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

            <div className="flex flex-1 flex-col gap-2 pl-6 py-6 max-640px:py-4 max-640px:px-4 max-640px:gap-1">
              <span className="text-[1.5rem] text-gray-100 font-bold max-640px:text-[1.125rem] sm:text-[1.125rem]">
                Wallpapers do evento
              </span>
              <span className="text-[0.875rem] text-gray-200 leading-[1.6] max-640px:text-[0.75rem]">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </span>
            </div>
            <div className="flex h-full items-center justify-center p-6 max-640px:p-4">
              <CaretRight className="w-6 h-6 text-blue-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
