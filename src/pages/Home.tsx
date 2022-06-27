import { FormEvent, useState } from 'react'
import Logo from '../assets/logo.svg'
import BlurBackground from '../assets/blur-background.png'
import CodeImg from '../assets/code-img.png'
import ReactIcon from '../assets/react-icon.svg'
import { Footer } from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useCreateSubscriberMutation } from '../graphql/generated'

export function Home() {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState<{ name: string; email: string }>({
    name: '',
    email: ''
  })
  const [createSubscriber, { data, loading }] = useCreateSubscriberMutation()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await createSubscriber({
      variables: { name: inputs.name, email: inputs.email }
    })
    if (data) {
      setInputs({ name: '', email: '' })
    }

    navigate('/platform')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  return (
    <div
      className="relative flex flex-col w-screen h-screen scrollbar"
      style={{
        overflow: 'auto',
        scrollbarGutter: 'stable'
      }}
    >
      <img
        className="absolute z-0 top-3 right-[calc(50%-327px)]"
        src={ReactIcon}
        alt="reactjs icon"
      />
      <div
        className="bg-cover flex flex-1"
        style={{ backgroundImage: 'url(' + BlurBackground + ')' }}
      >
        <div className="flex flex-col px-28 py-20">
          <div className="flex items-center gap-[12.5rem] z-10">
            <div className="flex flex-1 flex-col">
              <img
                className="w-[208px]"
                src={Logo}
                alt="ignite lab | REACTJS"
              />
              <h1 className="mt-8 mb-6 text-[2.5rem] leading-[1.25] text-gray-100">
                Construa uma{' '}
                <span className="font-medium text-blue-500">
                  aplicação completa
                </span>
                , do zero, com{' '}
                <span className="font-medium text-blue-500">React JS</span>
              </h1>
              <span className="text-gray-200 leading-[1.6]">
                Em apenas uma semana você vai dominar na prática uma das
                tecnologias mais utilizadas e com alta demanda para acessar as
                melhores oportunidades do mercado.
              </span>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-[391px] rounded bg-gray-700 p-8 ring-1 ring-inset ring-gray-500"
            >
              <fieldset className="flex flex-col gap-2">
                <legend className="mb-6 text-[1.5rem] font-bold leading-[1.4] text-gray-100">
                  Inscreva-se gratuitamente
                </legend>
                <label htmlFor="name">
                  <input
                    className="w-full rounded bg-gray-900 p-5 text-gray-100 outline-none transition-all duration-200 ease-out placeholder:text-gray-300 hover:ring-1 hover:ring-inset hover:ring-green-300 focus:ring-1 focus:ring-inset focus:ring-green-300"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="email">
                  <input
                    className="w-full rounded bg-gray-900 p-5 text-gray-100 outline-none transition-all duration-200 ease-out placeholder:text-gray-300 hover:ring-1 hover:ring-inset hover:ring-green-300 focus:ring-1 focus:ring-inset focus:ring-green-300"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Digite seu email"
                    onChange={handleChange}
                  />
                </label>
              </fieldset>
              <button
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center rounded bg-green-500 py-4 px-6 text-[0.875rem] font-bold leading-[1.6] text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-wait transition-all duration-200 ease-out"
                type="submit"
              >
                GARANTIR MINHA VAGA
              </button>
            </form>
          </div>
          <img className="w-full object-cover" src={CodeImg} alt="IDE" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
