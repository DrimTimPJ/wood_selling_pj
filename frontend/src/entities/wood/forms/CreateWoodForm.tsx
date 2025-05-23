'use client'

import { useForm, useFieldArray } from 'react-hook-form'
import { WoodInputData, WoodProps } from '../type'
import usePost from '@/customHooks/usePost'
import routes from '@/constants/serverLinks'
import { Dispatch, SetStateAction, useEffect } from 'react'
import Button from '@/shared/button/button'
import useUpdateStore from '@/store/updateStore'

const CreateWoodForm: React.FC<{
  setFunc: Dispatch<SetStateAction<boolean>>
}> = ({ setFunc }) => {
  const updateWoods = useUpdateStore((state) => state.triggerUpdateWoods)
  const isUpdating = useUpdateStore((state) => state.isUpdating)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<WoodInputData>({
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

  const { data, error, postRequest } = usePost<WoodProps>(routes.wood.base)

  useEffect(() => {
    if (!error && data) {
      updateWoods()
      setFunc(false)
    }
  }, [error, data])

  const onSubmit = (data: WoodInputData) => {
    if (Object.keys(errors).length == 0) {
      postRequest(data)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center backdrop-blur-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#1a1a1a] p-6 rounded-xl shadow-xl w-full max-w-xl"
      >
        <input
          type="text"
          className="border border-[rgb(114,139,173)] p-3 placeholder:text-[#D9D9D9] text-white w-full mt-5 rounded-2xl md:w-[50%] md:block m-auto lg:w-[35%]"
          {...register('image')}
          placeholder="Посилання на картинку"
          required
        />

        <input
          type="text"
          className="border border-[rgb(114,139,173)] p-3 placeholder:text-[#D9D9D9] text-white w-full mt-5 rounded-2xl md:w-[50%] md:block m-auto lg:w-[35%]"
          {...register('name', {
            required: 'Назва обов`язкова',
            pattern: {
              value: /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/,
              message: 'Дозволені тільки букви, суко',
            },
          })}
          placeholder="Назва"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 text-center">
            {errors.name.message}
          </p>
        )}

        <div className="m-0 m-auto pt-10 md:w-[40%]">
          <h3 className="text-white text-lg mb-2">Характеристика</h3>
          {fields.map((field, index) => (
            <div key={index}>
              <div key={field.id} className="flex gap-2 mb-2 items-center">
                <input
                  {...register(`statistics.${index}.name` as const, {
                    required: 'Назва характеристики обов`язкова',
                    pattern: {
                      value: /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/,
                      message: 'Дозволені тільки букви, суко',
                    },
                  })}
                  placeholder="Назва характеристики"
                  className="input-style"
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
              {errors.statistics?.[index]?.name && (
                <p className="text-red-500 text-sm text-center">
                  {errors.statistics[index]?.name?.message}
                </p>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ name: '', isTrue: false })}
            className="mt-2 text-white underline cursor-pointer w-[100%]"
          >
            + Додати характеристику
          </button>

          <button
            type="submit"
            className="block bg-blue-500 text-white px-4 py-2 rounded mt-6 m-0 m-auto cursor-pointer"
            disabled={isUpdating}
          >
            {isUpdating ? 'Підтверджуємо...' : 'Створити'}
          </button>
          <div className="mt-10" onClick={() => setFunc(false)}>
            <Button text="Відмінити створення" />
          </div>
        </div>

        {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      </form>
    </div>
  )
}

export default CreateWoodForm
