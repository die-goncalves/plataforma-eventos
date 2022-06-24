import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type LessonProps = {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

const dateFormatting = (date: Date) => {
  const weekday = format(date, 'EEEE', { locale: ptBR })
  const weekdaySimplified = weekday.replace(/-.*/i, '')
  const CapitalizeFirstLetterWeekdaySimplified =
    weekdaySimplified.charAt(0).toUpperCase() + weekdaySimplified.slice(1)

  return (
    CapitalizeFirstLetterWeekdaySimplified +
    format(date, "' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })
  )
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = dateFormatting(props.availableAt)

  return (
    <div>
      <span className="text-gray-300 text-[1rem]">
        {availableDateFormatted}
      </span>

      <a
        href="#"
        className={`relative flex flex-col p-4 mt-2 rounded ring-1 ring-inset ring-gray-500 transition-all duration-200 ease-out ${
          !isLessonAvailable
            ? 'pointer-events-none opacity-50'
            : 'hover:ring-green-500'
        }`}
      >
        <header className="flex justify-between">
          {isLessonAvailable ? (
            <div className="flex items-center text-blue-500">
              <CheckCircle className="w-5 h-5" />
              <span className="text-[0.875rem] font-medium ml-2">
                Conteúdo liberado
              </span>
            </div>
          ) : (
            <div className="flex items-center text-orange-500">
              <Lock className="w-5 h-5" />
              <span className="text-[0.875rem] font-medium ml-2">Em breve</span>
            </div>
          )}

          <span className="px-2 py-0.5 border border-solid rounded text-[0.75rem] font-bold text-green-300 border-green-300">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <span className="text-[1rem] font-bold mt-4 text-gray-200">
          {props.title}
        </span>
      </a>
    </div>
  )
}
