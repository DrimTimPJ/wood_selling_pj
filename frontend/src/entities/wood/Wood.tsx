import { FC } from 'react';
import Image from 'next/image';

import { WoodProps } from './type';

const Wood: FC<WoodProps> = ({ name, image, statistics }) => {
  return (
    <div className="text-whites w-[100px] md:w-[125px]">
      <div className="w-[100%]">
        <div className="flex justify-center w-[100%]">
          <Image
            className="w-[100%] md:h-[125px]"
            src={image}
            alt="image"
            width={100}
            height={100}
          />
        </div>
        <div className="pt-2 md:pt-5 text-center text-[24px] md:text-[36px]">
          {name}
        </div>
      </div>
      <div>
        {statistics.map((woodStatistics, index) => (
          <div key={index} className="flex pt-2">
            <div className="flex items-center mr-2">
              {(woodStatistics.isTrue && (
                <Image
                  width={10}
                  height={10}
                  className="md:w-[15px] md:h-[15px]"
                  src={'/icons/check-mark.svg'}
                  alt="check-mark"
                />
              )) || (
                <Image
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
    </div>
  );
};

export default Wood;
