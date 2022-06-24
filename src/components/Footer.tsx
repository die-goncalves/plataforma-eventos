import { Link } from 'react-router-dom'
import Rocketseat from '../assets/logo-rocketseat.svg'

export function Footer() {
  return (
    <div className="flex py-6 mx-6 items-center justify-between shadow-[inset_0_1px_0_0_#29292E]">
      <div className="flex items-center">
        <a
          href="https://www.rocketseat.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-[162px] object-cover"
            src={Rocketseat}
            alt="logo Rocketseat"
          />
        </a>

        <Link
          to="/copyright"
          className="ml-6 text-[1rem] leading-[1.6] text-gray-300 hover:underline decoration-gray-300"
        >
          Rocketseat - Todos os direitos reservados
        </Link>
      </div>

      <Link
        to="/politicas-de-privacidade"
        className="text-[1rem] leading-[1.6] text-gray-300 hover:underline decoration-gray-300"
      >
        Políticas de privacidade
      </Link>
    </div>
  )
}
