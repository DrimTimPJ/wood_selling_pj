'use client'

import { useState } from 'react'

import useGet from '@/customHooks/useGet'
import SimpleSlider from '@/components/SimpleSlider'
import OurWork from '@/entities/ourWork/OurWork'
import ourWorkMockData from '@/entities/ourWork/mockData'
import CreateOurWorkForm from '@/entities/ourWork/forms/CreateOurWork'
import Button from '@/shared/button/button'
import useAuthStore from '@/store/authStore'

import { OurWorkProps } from '@/entities/ourWork/type'
import routes from '@/contants/serverLinks'
import useUpdateStore from '@/store/updateStore'

export default function OurWorkSection() {
  const token = useAuthStore((state) => state.token)
  const [isShow, setIsShow] = useState<boolean>(false)
  const isOurWorkUpdated = useUpdateStore((state) => state.ourWorkIsUpdated)

  const { data, error, isLoading } = useGet<OurWorkProps[]>(
    routes.ourWork.base,
    isOurWorkUpdated
  )

  if (data) {
    return (
      <div className="bg-[#222021] text-white text-[36px] md:text-[56px] lg:text-[72px] pt-10 pb-20">
        <div className="text-[16px]">
          {isShow && <CreateOurWorkForm setFunc={setIsShow} />}
        </div>
        <div className="w-[80%] lg:w-[60%] m-auto m-0">
          <div className="pb-10 md:text-center">Our work</div>
          <div>
            <SimpleSlider Component={OurWork} values={data} />
          </div>
        </div>
        <div
          className="text-[16px] mt-10 w-[50%] m-0 m-auto"
          onClick={() => setIsShow(!isShow)}
        >
          {token && <Button text="Create new work" />}
        </div>
      </div>
    )
  }
}
