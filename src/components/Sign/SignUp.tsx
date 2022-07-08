import { FormEvent, useState } from 'react'
import { useCreateSubscriberMutation } from '../../graphql/generated'
import { useAuth } from '../../hooks/auth'
import { createJWT } from '../../utils/handlejwt'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { ApolloError } from '@apollo/client'
import { graphQLErrors } from '../../utils/graphQLError'
import * as yup from 'yup'
import { setLocale } from 'yup'

setLocale({
  mixed: {
    required: ({ path }) =>
      `${path.charAt(0).toUpperCase() + path.slice(1)} obrigatório.`
  }
})

const schema = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email('Deve ser um email válido.').required()
})

type SignUpProps = {
  option: React.Dispatch<React.SetStateAction<boolean>>
}

export function SignUp({ option }: SignUpProps) {
  const [inputs, setInputs] = useState<{ name: string; email: string }>({
    name: '',
    email: ''
  })
  const { setIsAuthenticated } = useAuth()
  const [createSubscriber, { loading: loadingCreateSubscriber }] =
    useCreateSubscriberMutation()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      await schema.validate(
        {
          nome: inputs.name,
          email: inputs.email
        },
        { abortEarly: false }
      )

      const token = await createJWT({ name: inputs.name, email: inputs.email })
      await createSubscriber({
        variables: { name: inputs.name, email: inputs.email, token }
      })

      Cookies.set('IgniteLabPlatformByDie_token', token, { expires: 365 })
      toast.success('Parabéns! A inscrição foi um sucesso.')

      setIsAuthenticated(true)
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        toast.error(error.errors.join('\r\n'))
      } else if (error instanceof ApolloError) {
        graphQLErrors(error)
      } else console.log({ error })
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
        <legend className="mb-6 text-[1.5rem] font-bold leading-[1.4] text-gray-100 max-640px:text-[1.125rem] sm:text-[1.125rem] sm:mb-4 lg:text-[1.125rem]">
          Inscreva-se gratuitamente
        </legend>
        <button
          onClick={() => option(prevState => !prevState)}
          type="button"
          className="absolute opacity-50 top-[1.5rem] right-[1.5rem] text-gray-100 text-[1.5rem] leading-[1.4] max-640px:text-[1.125rem] max-640px:top-[2rem] max-640px:right-[1.5rem] sm:text-[1.125rem] sm:top-[1rem] sm:right-[1rem] lg:text-[1.125rem] lg:top-[1.5rem] lg:right-[1.5rem]"
        >
          Entre
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
        disabled={loadingCreateSubscriber}
        className="mt-6 flex w-full items-center justify-center rounded bg-green-500 py-4 px-6 text-[0.875rem] font-bold leading-[1.6] text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-wait transition-all duration-200 ease-out sm:mt-4"
        type="submit"
      >
        GARANTIR MINHA VAGA
      </button>
    </form>
  )
}
