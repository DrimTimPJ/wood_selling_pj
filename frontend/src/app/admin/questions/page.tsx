'use client'

import useAuthStore from '@/store/authStore'
import useGet from '@/customHooks/useGet'
import { QuestionProps } from '@/entities/question/type'
import routes from '@/contants/serverLinks'
import Question from '@/entities/question/Question'
import useUpdateStore from '@/store/updateStore'

const Page = () => {
  const token = useAuthStore((state) => state.token)
  const QuestionsIsUpdated = useUpdateStore((state) => state.questionsIsUpdated)

  const { data, isLoading, error } = useGet<QuestionProps[]>(
    token ? routes.questions.base : null,
    QuestionsIsUpdated
  )

  if (!token) return null

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error}</div>

  return (
    <div className="bg-[#222021] pb-30">
      <h1 className="pt-10 pb-10 text-[48px] md:text-[64px] text-center">
        Questions
      </h1>
      {data?.map((question) => (
        <div key={question._id} className="w-[80%] m-0 m-auto mt-20">
          <Question {...question} />
        </div>
      ))}
    </div>
  )
}

export default Page
