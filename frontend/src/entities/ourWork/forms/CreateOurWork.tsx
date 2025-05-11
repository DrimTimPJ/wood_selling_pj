'use client'

import { useForm } from 'react-hook-form'
import { InputOurWork, OurWorkProps } from '../type'
import usePost from '@/customHooks/usePost'
import routes from '@/contants/serverLinks'
import { Dispatch, SetStateAction, useEffect } from 'react'
import Button from '@/shared/button/button'
import useUpdateStore from '@/store/updateStore'

const CreateOurWorkForm: React.FC<{
  setFunc: Dispatch<SetStateAction<boolean>>
}> = ({ setFunc }) => {
  const triggerUpdateWorks = useUpdateStore(
    (state) => state.triggerUpdateOurWork
  )

  const { register, handleSubmit } = useForm<InputOurWork>({
    defaultValues: {
      image: '',
      price: 0,
    },
  })

  const { data, error, isLoading, postRequest } = usePost<OurWorkProps>(
    routes.ourWork.base
  )

  useEffect(() => {
    if (!error && data) {
      triggerUpdateWorks()
      setFunc(false)
    }
  }, [error, data])

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center backdrop-blur-sm">
      <form
        onSubmit={handleSubmit((data: InputOurWork) => postRequest(data))}
        className="bg-[#1a1a1a] p-6 rounded-xl shadow-xl w-full max-w-xl"
      >
        <input
          type="text"
          className="border border-[rgb(114,139,173)] p-3 placeholder:text-[#D9D9D9] text-white w-full mt-5 rounded-2xl md:w-[50%] md:block m-auto lg:w-[35%]"
          {...register('image')}
          placeholder="Image link"
          required
        />

        <input
          type="number"
          className="border border-[rgb(114,139,173)] p-3 placeholder:text-[#D9D9D9] text-white w-full mt-5 rounded-2xl md:w-[50%] md:block m-auto lg:w-[35%]"
          {...register('price')}
          placeholder="price"
          required
        />

        <button
          type="submit"
          className="block bg-blue-500 text-white px-4 py-2 rounded mt-6 m-0 m-auto cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Create'}
        </button>
        <div className="mt-10" onClick={() => setFunc(false)}>
          <Button text="Cancel creation" />
        </div>

        {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      </form>
    </div>
  )
}

export default CreateOurWorkForm
