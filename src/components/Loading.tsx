import Logo from '../assets/logo.svg'

export function Loading() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="max-640px:max-w-[168px]">
        <img className="" src={Logo} alt="Logo" />
        <div className="relative overflow-hidden mt-4 w-full bg-gray-700 h-1">
          <div className="absolute w-[100px] animate-infinite-loading bg-green-300 h-1"></div>
        </div>
      </div>
    </div>
  )
}
