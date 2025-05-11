'use client'

import routes from '@/contants/serverLinks'
import { QuestionProps } from './type'

import useDelete from '@/customHooks/useDelete'
import Button from '@/shared/button/button'
import { useEffect } from 'react'
import useUpdateStore from '@/store/updateStore'

const Question: React.FC<QuestionProps> = ({
  telephoneNumber,
  question,
  name,
  _id,
}) => {
  const triggerQuestionUpdate = useUpdateStore(
    (state) => state.triggerUpdateQuestions
  )
  const { success, error, deleteRequest } = useDelete(
    `${routes.questions.base}/${_id}`,
    triggerQuestionUpdate
  )

  useEffect(() => {
    console.log('s')
  }, [success])

  return (
    <div className=" border border-white rounded-3xl text-center p-10 md:text-[24px]">
      <div>
        Відправник: <strong>{name}</strong>
      </div>
      <div className="mt-5">
        Номер телефону: <strong>{telephoneNumber}</strong>
      </div>
      <div className="mt-5">Question:</div>
      <div className="w-[80%] m-0 m-auto">
        <strong>{question}</strong>
      </div>
      <div
        className="mt-10 text-[16px] w-[30%] m-0 m-auto"
        onClick={() => deleteRequest()}
      >
        <Button text="Delete" />
      </div>
    </div>
  )
}

export default Question
