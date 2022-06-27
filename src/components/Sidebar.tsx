import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  return (
    <aside className="bg-gray-700 w-[21.75rem] p-6 shadow-[inset_1px_0_0_0_#323238]">
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
    </aside>
  )
}
