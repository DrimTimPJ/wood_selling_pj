'use client'

import { useForm, useFieldArray } from 'react-hook-form'
import { WoodInputData, WoodProps } from '../type'
import usePost from '@/customHooks/usePost'
import routes from '@/contants/serverLinks'
import { Dispatch, SetStateAction, useEffect } from 'react'
import Button from '@/shared/button/button'
import useUpdateStore from '@/store/updateStore'

const CreateWoodForm: React.FC<{
  setFunc: Dispatch<SetStateAction<boolean>>
}> = ({ setFunc }) => {
  const updateWoods = useUpdateStore((state) => state.triggerUpdateWoods)

  const { register, handleSubmit, control } = useForm<WoodInputData>({
    defaultValues: {
      image: '',
      name: '',
      statistics: [{ name: '', isTrue: false }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'statistics',
  })

  const { data, error, isLoading, postRequest } = usePost<WoodProps>(
    routes.wood.base
  )

  useEffect(() => {
    if (!error && data) {
      updateWoods()
      setFunc(false)
    }
  }, [error, data])

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center backdrop-blur-sm">
      <form
        onSubmit={handleSubmit((data: WoodInputData) => postRequest(data))}
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
          type="text"
          className="border border-[rgb(114,139,173)] p-3 placeholder:text-[#D9D9D9] text-white w-full mt-5 rounded-2xl md:w-[50%] md:block m-auto lg:w-[35%]"
          {...register('name')}
          placeholder="Name"
          required
        />

        <div className="m-0 m-auto pt-10 md:w-[40%]">
          <h3 className="text-white text-lg mb-2">Statistics</h3>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2 items-center">
              <input
                {...register(`statistics.${index}.name` as const)}
                placeholder="Statistic name"
                className="input-style"
                required
              />
              <input
                type="checkbox"
                {...register(`statistics.${index}.isTrue` as const)}
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ name: '', isTrue: false })}
            className="mt-2 text-white underline cursor-pointer w-[100%]"
          >
            + Add Statistic
          </button>

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
        </div>

        {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      </form>
    </div>
  )
}

export default CreateWoodForm
