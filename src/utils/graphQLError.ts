import { ApolloError, ServerError } from '@apollo/client'
import { toast } from 'react-toastify'

export function graphQLErrors(error: ApolloError) {
  if (error.graphQLErrors.length) {
    for (const err of error.graphQLErrors) {
      switch (err.extensions.code) {
        case '403':
          toast.error('Não permitido!')
      }
    }
  } else if (error.networkError?.name === 'ServerError') {
    const serverError = error.networkError as ServerError
    serverError.result.errors.forEach((error: { message: string }) => {
      if (error.message === 'value is not unique for the field "email"')
        toast.error('Já existe uma inscrição com este e-mail.')
      if (error.message === 'Input value does not match the expected format.')
        toast.error('Deve ser um e-mail válido.')
      if (error.message === "variable 'name' must be defined")
        toast.error('Nome obrigatório.')
      if (error.message === "variable 'email' must be defined")
        toast.error('E-mail obrigatório.')
    })
  } else console.log(`[Apollo Error]: ${error}`)
}
