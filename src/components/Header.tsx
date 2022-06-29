import { List, X } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import Logo from '../assets/logo.svg'

type HeaderProps = {
  setActiveNavLessons: React.Dispatch<React.SetStateAction<boolean>>
  activeNavLessons: boolean
}

export function Header(props: HeaderProps) {
  const { pathname } = useLocation()

  function handleNavLessons() {
    props.setActiveNavLessons(prevState => !prevState)
  }

  return (
    <header className="w-full flex justify-center items-center py-5 bg-gray-700 shadow-[inset_0_-1px_0_0_#29292E] max-640px:px-6 max-640px:py-4 max-640px:justify-between sm:justify-between sm:px-6 sm:py-4 lg:justify-between lg:px-8">
      <img
        className="max-640px:max-w-[168px]"
        src={Logo}
        alt="ignite lab | REACTJS"
      />
      {pathname !== '/' && (
        <div className="hidden gap-2 items-center max-640px:flex sm:flex lg:flex">
          <p className="text-[0.875rem] text-gray-100 leading-[1.6] lg:text-[1rem]">
            Aulas
          </p>
          <button
            onClick={handleNavLessons}
            className="text-blue-500 hover:opacity-70 transition-all duration-200 ease-out"
          >
            {props.activeNavLessons ? (
              <X className="w-6 h-6" />
            ) : (
              <List className="w-6 h-6" />
            )}
          </button>
        </div>
      )}
    </header>
  )
}
