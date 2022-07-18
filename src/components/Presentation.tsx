import { HandWaving } from 'phosphor-react'

export function Presentation() {
  return (
    <div className="sticky top-0 flex flex-1 max-h-screen flex-col">
      <div className="flex w-full h-full ">
        <div className="mx-auto flex flex-1 flex-col gap-8 items-center justify-center max-w-[400px] text-center">
          <div className="flex gap-2 items-center">
            <HandWaving className="flex-none w-10 h-10 animate-waving-hand text-green-300" />
            <p className="text-[1.5rem] font-bold">Bem vindo ao evento!</p>
          </div>
          <div>
            <p className="text-[1.125rem]">
              Prepare-se e fique com a gente até o final
            </p>
            <p className="mt-4 text-[1.125rem]">
              Juntos construíremos uma aplicação bem bacana, uma plataforma de
              eventos, utilizando as ferramentas mais atuais!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
