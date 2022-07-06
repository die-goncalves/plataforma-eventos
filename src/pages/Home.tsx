import { useEffect, useState } from 'react'
import Logo from '../assets/logo.svg'
import BlurBackground from '../assets/blur-background.png'
import CodeImg from '../assets/code-img.png'
import ReactIcon from '../assets/react-icon.svg'
import { Footer } from '../components/Footer'
import { useAuth } from '../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { SignUp } from '../components/Sign/SignUp'
import { SignIn } from '../components/Sign/SignIn'
import { Loading } from '../components/Loading'

export function Home() {
  const navigate = useNavigate()
  const [optionSign, setOptionSign] = useState(false)
  const { isAuthenticated, isLoadingApplication } = useAuth()

  useEffect(() => {
    if (isAuthenticated) navigate('/platform')
  }, [isAuthenticated])

  if (isLoadingApplication) {
    return <Loading />
  }

  if (!(isLoadingApplication === false && !isAuthenticated)) {
    return null
  }

  return (
    <div
      className="flex w-screen h-screen scrollbar"
      style={{
        overflow: 'auto',
        scrollbarGutter: 'stable'
      }}
    >
      <div className="flex relative flex-col max-w-[1440px] mx-auto">
        <div className="absolute top-3 w-full flex z-0 justify-center overflow-hidden max-640px:top-[-28px]">
          <img
            className="max-640px:max-w-[533px]"
            src={ReactIcon}
            alt="reactjs icon"
          />
        </div>

        <div
          className="bg-cover flex flex-1"
          style={{ backgroundImage: 'url(' + BlurBackground + ')' }}
        >
          <div className="flex flex-col px-28 py-20 max-640px:p-0 sm:px-12 sm:py-10 lg:px-14 lg:py-12">
            <div className="flex items-center gap-[12.5rem] z-10 max-640px:flex-col max-640px:gap-0 sm:flex-col sm:gap-0 sm:m-auto sm:max-w-[680px] lg:gap-16">
              <div className="flex flex-1 flex-col max-640px:justify-center max-640px:items-center max-640px:gap-6 max-640px:text-center max-640px:px-6 max-640px:pt-10 max-640px:pb-8 sm:items-center sm:text-center sm:mb-6">
                <img
                  className="w-[208px]"
                  src={Logo}
                  alt="ignite lab | REACTJS"
                />
                <h1 className="mt-8 mb-6 text-[2.5rem] leading-[1.25] text-gray-100 max-640px:text-[1.875rem] sm:text-[1.875rem] lg:text-[2rem]">
                  Construa uma{' '}
                  <span className="font-medium text-blue-500">
                    aplicação completa
                  </span>
                  , do zero, com{' '}
                  <span className="font-medium text-blue-500">React JS</span>
                </h1>
                <span className="text-gray-200 leading-[1.6] max-640px:text-[0.875rem] sm:text-[0.875rem]">
                  Em apenas uma semana você vai dominar na prática uma das
                  tecnologias mais utilizadas e com alta demanda para acessar as
                  melhores oportunidades do mercado.
                </span>
              </div>
              {!optionSign ? (
                <SignUp option={setOptionSign} />
              ) : (
                <SignIn option={setOptionSign} />
              )}
            </div>
            <img className="w-full object-cover" src={CodeImg} alt="IDE" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
