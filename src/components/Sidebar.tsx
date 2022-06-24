import { gql, useQuery } from '@apollo/client'
import { Lesson } from './Lesson'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`

type GetLessonsQueryResponse = {
  lessons: Array<{
    id: string
    lessonType: 'live' | 'class'
    availableAt: string
    title: string
    slug: string
  }>
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
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
