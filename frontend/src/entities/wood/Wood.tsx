'use client'

import { FC } from 'react'
import DeleteWoodForm from './forms/DeleteWoodForm'
import useAuthStore from '@/store/authStore'
import { WoodProps } from './type'

const Wood: FC<WoodProps> = ({ name, image, statistics, _id }) => {
  const token = useAuthStore((state) => state.token)

  return (
    <div className="text-whites w-[100px] md:w-[125px]">
      <div className="w-[100%]">
        <div className="flex justify-center w-[100%]">
          <img
            className="w-[100%] md:h-[125px] rounded-2xl"
            src={image}
            alt="image"
          />
        </div>
        <div className="pt-2 md:pt-5 text-center text-[24px] md:text-[36px]">
          <strong>{name}</strong>
        </div>
      </div>
      <div>
        {statistics.map((woodStatistics, index) => (
          <div key={index} className="flex pt-2">
            <div className="flex items-center mr-2">
              {(woodStatistics.isTrue && (
                <img
                  width={10}
                  height={10}
                  className="md:w-[15px] md:h-[15px]"
                  src={'/icons/check-mark.svg'}
                  alt="check-mark"
                />
              )) || (
                <img
                  width={10}
                  height={10}
                  className="md:w-[15px] md:h-[15px]"
                  src={'/icons/golden-cross.svg'}
                  alt="golden cross"
                />
              )}
            </div>
            <div className="text-[10px] md:text-[20px] ml-2">
              {woodStatistics.name}
            </div>
          </div>
        ))}
      </div>
      {token && <DeleteWoodForm _id={_id} />}
    </div>
  )
}

export default Wood
