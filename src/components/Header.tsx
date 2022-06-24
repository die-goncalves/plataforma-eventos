import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="w-full flex justify-center items-center py-5 bg-gray-700 shadow-[inset_0_-1px_0_0_#29292E]">
      <img src={Logo} alt="ignite lab | REACTJS" />
    </header>
  )
}
