'use client'
import { useState } from 'react'

import Wood from '@/entities/wood/Wood'

import CreateWoodForm from '@/entities/wood/forms/CreateWoodForm'
import Button from '@/shared/button/button'
import useAuthStore from '@/store/authStore'
import useGet from '@/customHooks/useGet'
import { WoodProps } from '@/entities/wood/type'
import routes from '@/constants/serverLinks'
import useUpdateStore from '@/store/updateStore'

export default function WoodWeUseSection() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const token = useAuthStore((state) => state.token)
  const woodsIsUpdated = useUpdateStore((state) => state.woodsIsUpdated)

  const { data, error} = useGet<WoodProps[]>(
    routes.wood.base,
    woodsIsUpdated
  )

  if (data) {
    return (
      <div className="bg-[#222021] pt-10 pb-10 text-white">
        {isShow && <CreateWoodForm setFunc={setIsShow} />}
        <div className="w-[90%] m-0 m-auto">
          <div className="text-[32px] m-0 m-auto w-[80%] md:w-[70%] md:text-center md:text-[64px] lg:text-[90px] lg:w-[40%] ">
            Дерево з яким ми працюємо
          </div>
          <div className="overflow-x-scroll custom-scrollbar overflow-visible flex justify-evenly pb-10 mt-10 lg:mt-20 w-[60%] m-0 m-auto">
            {data.map((item, index) => (
              <div
                key={index}
                className={index !== 0 ? 'pl-15 md:pl-30 lg:pl-40' : ''}
              >
                <Wood {...item} />
              </div>
            ))}
          </div>
        </div>
        {token && (
          <div
            className="w-[30%] m-0 m-auto mt-10"
            onClick={() => setIsShow(!isShow)}
          >
            <Button text="Create" />
          </div>
        )}
      </div>
    )
  }
}
