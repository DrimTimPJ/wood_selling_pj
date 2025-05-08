import Wood from '@/entities/wood/Wood';

import mockData from '@/entities/wood/mockData';

export default function WoodWeUseSection() {
  return (
    <div className="bg-[#222021] pt-10 pb-10 text-white">
      <div className="w-[90%] m-0 m-auto">
        <div className="text-[32px] m-0 m-auto w-[80%] md:w-[70%] md:text-center md:text-[64px] lg:text-[90px] lg:w-[40%] ">
          The wood we work with
        </div>
        <div className="overflow-x-scroll overflow-visible flex pb-10 mt-10 lg:mt-20">
          {mockData.map((item, index) => (
            <div
              key={index}
              className={index !== 0 ? 'pl-15 md:pl-30 lg:pl-40' : ''}
            >
              <Wood {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
