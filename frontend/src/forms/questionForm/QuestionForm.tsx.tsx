'use client'

import { useForm } from 'react-hook-form'
import usePost from '@/customHooks/usePost'
import routes from '@/constants/serverLinks'
import { QuestionInputData, QuestionProps } from '@/entities/question/type'

import Button from '@/shared/button/button'
import useUpdateStore from '@/store/updateStore'

export default function QuestionForm() {
  const isUpdating = useUpdateStore((state) => state.isUpdating)
  const { register, handleSubmit, reset } = useForm<QuestionInputData>()
  const { data, error, postRequest } = usePost<QuestionProps>(
    routes.questions.base
  )

  const onSubmit = (formData: QuestionInputData) => {
    postRequest(formData)
    reset()
  }

  if (data) {
    return <h2 className="text-center">Created! We'll call you.</h2>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <h2 className="text-center text-red-500 text-[12px] md:text-[16px] padding-[5px]">
          Be sure that you have enetered correct number phone +380.... or
          096|067 etc ....
        </h2>
      )}
      <input
        className="border border-[#728BAD] p-3 placeholder:text-[#D9D9D9] text-white w-full mt-5 rounded-2xl md:w-[50%] md:block m-auto lg:w-[35%]"
        type="text"
        {...register('name')}
        placeholder="Your name"
        required
      />
      <input
        className="border border-[#728BAD] p-3 placeholder:text-[#D9D9D9] text-white w-full mt-5 rounded-2xl md:w-[50%] md:block m-auto lg:w-[35%]"
        type="text"
        {...register('telephoneNumber')}
        placeholder="Your telephone number"
        required
      />
      <textarea
        className="border border-[#728BAD] p-3 placeholder:text-[#D9D9D9] text-white w-full mt-5 rounded-2xl md:w-[50%] md:block m-auto lg:w-[35%]"
        {...register('question')}
        placeholder="Your question"
        required
      />
      <div className="w-[40%] mt-5 m-auto lg:w-[30%]">
        <Button text={isUpdating ? 'Sending...' : 'Send'} />
      </div>
    </form>
  )
}
