import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

type SidebarProps = {
  activeNavLessons: boolean
}

export function Sidebar(props: SidebarProps) {
  const { data } = useGetLessonsQuery()
  return (
    <aside
      className={`flex bg-gray-700 w-[21.75rem] min-h-full p-6 shadow-[inset_1px_0_0_0_#323238] ${
        props.activeNavLessons
          ? 'z-10 max-640px:absolute max-640px:w-full sm:absolute sm:w-full lg:absolute lg:w-full'
          : 'max-640px:hidden sm:hidden lg:hidden'
      }`}
    >
      <div className="flex flex-1 flex-col">
        <h1 className="pb-6 mb-6 border-solid border-b border-gray-500 font-bold text-2xl">
          Cronograma de aulas
        </h1>

        <section className="flex flex-col gap-8 mt-6">
          {data?.lessons.map(lesson => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          ))}
        </section>
      </div>
    </aside>
  )
}
