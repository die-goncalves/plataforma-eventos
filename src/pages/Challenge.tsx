import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretLeft, FigmaLogo, GithubLogo, Link } from 'phosphor-react'
import { useParams, Link as LinkRouter, useNavigate } from 'react-router-dom'
import { FormatRichText } from '../components/FormatRichText'
import { useGetChallengeByLessonSlugQuery } from '../graphql/generated'
import Logo from '../assets/logo.svg'
import { FormEvent, useState } from 'react'
import { Loading } from '../components/Loading'

export function Challenge() {
  const navigate = useNavigate()
  const [repository, setRepository] = useState('')
  const { slug } = useParams()
  const { data, loading } = useGetChallengeByLessonSlugQuery({
    variables: { slug }
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRepository(event.target.value)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  if (loading) {
    return <Loading />
  }

  if (!data?.lesson?.challenge) {
    return <div>Não há desafio! :(</div>
  }

  return (
    <div
      className="h-screen w-screen scrollbar"
      style={{ scrollbarGutter: 'stable', overflow: 'auto' }}
    >
      <div className="flex flex-col max-w-[1440px] mx-auto items-center px-2">
        <header className="relative flex w-full max-w-[55.5rem] justify-center items-center py-5 mb-5 bg-gray-900 shadow-[inset_0_-1px_0_0_#29292E] max-640px:px-6 max-640px:py-4 sm:px-6 sm:py-4 lg:px-8">
          <LinkRouter
            to={`/platform/lesson/${slug}`}
            className="flex absolute left-0"
          >
            <CaretLeft className="w-6 h-6 max-640px:w-5 max-640px:h-5 text-green-300 hover:text-green-500" />
          </LinkRouter>
          <img
            className="max-w-[164px] max-640px:max-w-[128px]"
            src={Logo}
            alt="ignite lab | REACTJS"
          />
        </header>
        <article className="flex flex-1 w-full max-w-[55.5rem] flex-col gap-8 pb-8">
          <header>
            <h1 className="text-[2rem] max-640px:text-[1.5rem] font-medium">
              {data.lesson.challenge.title}
            </h1>
          </header>

          <section className="w-full">
            <FormatRichText content={data.lesson.challenge.introduction.raw} />
          </section>

          <section className="w-full">
            <FormatRichText content={data.lesson.challenge.description.raw} />
          </section>

          <section className="w-full flex flex-col">
            <h1 className="mb-4 font-medium text-[1.5rem] leading-[1.6] max-640px:text-[1.125rem]">
              Template da aplicação
            </h1>
            <a
              href={data.lesson.challenge.layout}
              className="flex flex-1 rounded justify-between overflow-hidden bg-gray-700 hover:bg-[#202024] transition-all duration-200 ease-out"
            >
              <div className="flex flex-col flex-1 p-4 gap-4 truncate">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <GithubLogo className="flex-none w-6 h-6 text-green-700" />
                    <span className="font-medium leading-[1.6] text-gray-100 truncate">
                      {`${data.lesson.challenge.templateGithub.replace(
                        'https://github.com/',
                        ''
                      )}`}
                    </span>
                  </div>
                  <p className="text-[0.75rem] text-gray-300 truncate">
                    {`Contribute to ${data.lesson.challenge.templateGithub.replace(
                      'https://github.com/',
                      ''
                    )} development by creating an account on Github`}
                  </p>
                </div>

                <p className="text-[0.75rem] leading-[1.4] text-gray-200 truncate">
                  {data.lesson.challenge.templateGithub}
                </p>
              </div>
              <div className="flex w-[calc(50%-10rem)] bg-green-700 max-640px:hidden">
                <GithubLogo className="w-10 h-10 text-gray-900 m-auto" />
              </div>
            </a>
          </section>

          <section className="w-full">
            <FormatRichText content={data.lesson.challenge.preparation.raw} />
          </section>

          <section className="w-full flex flex-col">
            <h1 className="mb-4 font-medium text-[1.5rem] leading-[1.6] max-640px:text-[1.125rem]">
              Layout
            </h1>
            <a
              href={data.lesson.challenge.layout}
              className="flex flex-1 rounded justify-between overflow-hidden bg-gray-700 hover:bg-[#202024] transition-all duration-200 ease-out"
            >
              <div className="flex flex-col flex-1 p-4 gap-4 truncate">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FigmaLogo className="flex-none w-6 h-6 text-green-700" />
                    <span className="font-medium leading-[1.6] text-gray-100 truncate">
                      {data.lesson.challenge.title}
                    </span>
                  </div>
                  <p className="text-[0.75rem] text-gray-300 truncate">
                    Created with Figma
                  </p>
                </div>

                <p className="text-[0.75rem] leading-[1.4] text-gray-200 truncate">
                  {data.lesson.challenge.layout}
                </p>
              </div>
              <div className="flex w-[calc(50%-10rem)] bg-green-700 max-640px:hidden">
                <FigmaLogo className="w-10 h-10 text-gray-900 m-auto" />
              </div>
            </a>
          </section>

          <section className="w-full">
            <FormatRichText
              content={data.lesson.challenge.applicationChanges.raw}
            />
          </section>

          <section className="w-full">
            <FormatRichText
              content={data.lesson.challenge.testSpecification.raw}
            />
          </section>

          <section className="w-full flex flex-col">
            <h1 className="mb-4 font-medium text-[1.5rem] leading-[1.6] max-640px:text-[1.125rem]">
              Como deve ficar a aplicação ao final?
            </h1>
            <div className="bg-black flex justify-center">
              <div className="h-full w-full max-w-[1100px] max-h-[640px] aspect-video">
                {(() => {
                  if (data && data.lesson && data.lesson.challenge) {
                    return (
                      <Player className="h-full w-full">
                        <Youtube videoId={data.lesson.challenge.videoId} />
                        <DefaultUi />
                      </Player>
                    )
                  }
                })()}
              </div>
            </div>
          </section>

          <section className="w-full">
            <h1 className="mb-4 font-medium text-[1.5rem] leading-[1.6] max-640px:text-[1.125rem]">
              Enviar desafio
            </h1>
            <p className="mb-2 leading-[1.4] max-640px:text-[0.875rem]">
              Envie o link do repositório público que você fez suas alterações.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex w-full overflow-hidden rounded"
            >
              <label
                htmlFor="challenge"
                className="relative flex w-full items-center"
              >
                <Link className="absolute left-2 h-6 w-6 max-640px:w-5 max-640px:h-5 cursor-text text-green-500" />

                <input
                  className="w-full h-full bg-gray-700 py-4 max-640px:py-3 pl-10 max-640px:pl-9 pr-2 max-640px:text-[0.875rem] text-gray-100 caret-green-500 outline-none transition-all duration-200 ease-out placeholder:text-gray-300"
                  id="challenge"
                  type="text"
                  name="email"
                  placeholder="Digite o link do repositório"
                  onChange={handleChange}
                />
              </label>
              <button
                className="flex items-center justify-center bg-green-500 px-6 text-[0.875rem] font-bold leading-[1.6] text-white transition-all duration-200 ease-out hover:bg-green-700 disabled:cursor-wait disabled:opacity-50"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </section>
        </article>
      </div>
    </div>
  )
}
