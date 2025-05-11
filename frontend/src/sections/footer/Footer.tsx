import Image from 'next/image';

export default function Footer() {
  return (
    <div className="pt-25 bg-[#222021] text-white  pb-20 md:text-xl shadow-[0_4px_30px_rgba(255,255,255,0.9)]">
      <div className="w-[65%] m-0 m-auto lg:flex lg:w-[80%] lg:justify-around">
        <div className="flex justify-center">
          <Image
            className="md:scale-[1.5] lg:scale-[1.75] xl:scale-[2]"
            width={140}
            height={100}
            src="/icons/logo.svg"
            alt=""
          />
        </div>
        <div className="md:flex md:justify-between md:mt-10 lg:mt-0">
          <div className="flex mt-5">
            <div className="pr-3">
              <Image
                width={100}
                height={100}
                className="w-[30px]  h-[30px] mt-3"
                src="/icons/location-mark.svg"
                alt=""
              />
            </div>
            <div>
              вулиця Шолом-Алейхема, 4/26 <br />
              Дніпро, Дніпропетровська область, Україна, 49044
            </div>
          </div>
          <div className="flex mt-5 lg:pl-10">
            <div className="pr-3">
              <Image
                width={100}
                height={100}
                className="w-[30px]  h-[30px]"
                src="/icons/phone.svg"
                alt=""
              />
            </div>
            <div>+380962459010</div>
          </div>
        </div>
      </div>
    </div>
  );
}
