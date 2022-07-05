import { FormEvent, useState } from 'react'
import { useUpdateTokenSubscriberMutation } from '../../graphql/generated'
import { useAuth } from '../../hooks/auth'
import { createJWT } from '../../utils/handleJWT'

type SignInProps = {
  option: React.Dispatch<React.SetStateAction<boolean>>
}

export function SignIn({ option }: SignInProps) {
  const [inputs, setInputs] = useState<{ name: string; email: string }>({
    name: '',
    email: ''
  })
  const { setIsAuthenticated } = useAuth()
  const [updateToken, { loading: loadingUpdateToken }] =
    useUpdateTokenSubscriberMutation()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const token = await createJWT({ name: inputs.name, email: inputs.email })

      const { data } = await updateToken({
        variables: { email: inputs.email, token }
      })

      if (data?.updateSubscriber?.email) {
        sessionStorage.setItem('@IgniteLabPlatformByDie:token', token)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.log({ error })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-[420px] rounded bg-gray-700 p-6 ring-1 ring-inset ring-gray-500 max-640px:w-full max-640px:px-6 max-640px:py-8 sm:p-4 sm:w-[360px] lg:w-[360px]"
    >
      <fieldset className="flex flex-col gap-2">
        <legend className="ml-auto mb-6 text-[1.5rem] font-bold leading-[1.4] text-gray-100 max-640px:text-[1.125rem] sm:text-[1.125rem] sm:mb-4 lg:text-[1.125rem]">
          Entre
        </legend>
        <button
          onClick={() => option(prevState => !prevState)}
          type="button"
          className="absolute opacity-50 top-[1.5rem] left-[1.5rem] text-gray-100 text-[1.5rem] leading-[1.4] max-640px:text-[1.125rem] max-640px:top-[2rem] max-640px:left-[1.5rem] sm:text-[1.125rem] sm:top-[1rem] sm:left-[1rem] lg:text-[1.125rem] lg:top-[1.5rem] lg:left-[1.5rem]"
        >
          Inscreva-se gratuitamente
        </button>
        <label htmlFor="name">
          <input
            className="w-full rounded bg-gray-900 p-5 text-gray-100 outline-none transition-all duration-200 ease-out placeholder:text-gray-300 hover:ring-1 hover:ring-inset hover:ring-green-300 focus:ring-1 focus:ring-inset focus:ring-green-300 sm:p-4"
            id="name"
            type="text"
            name="name"
            placeholder="Seu nome completo"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          <input
            className="w-full rounded bg-gray-900 p-5 text-gray-100 outline-none transition-all duration-200 ease-out placeholder:text-gray-300 hover:ring-1 hover:ring-inset hover:ring-green-300 focus:ring-1 focus:ring-inset focus:ring-green-300 sm:p-4"
            id="email"
            type="text"
            name="email"
            placeholder="Digite seu email"
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button
        disabled={loadingUpdateToken}
        className="mt-6 flex w-full items-center justify-center rounded bg-green-500 py-4 px-6 text-[0.875rem] font-bold leading-[1.6] text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-wait transition-all duration-200 ease-out sm:mt-4"
        type="submit"
      >
        ENTRAR
      </button>
    </form>
  )
}
