'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [isShowMap, setIsShowMap] = useState<boolean>(false);

  return (
    <div className="bg-[#222021] text-2xl text-white pb-10">
      <div className="w-[90%] m-0 m-auto lg:flex lg: justify-around pt-20">
        <div>
          <div className="text-[48px] lg:text-[100px]">Контакти</div>

          <div>
            <div className="flex mt-10">
              <div>
                <Image
                  height={30}
                  width={30}
                  src={'/icons/phone.svg'}
                  alt="phone"
                />
              </div>
              <div className="pl-5">+380 96 24 590 10</div>
            </div>

            <div className="flex mt-10">
              <div>
                <Image
                  height={30}
                  width={30}
                  src={'/icons/location-mark.svg'}
                  alt="mark-point"
                />
              </div>
              <div className="pl-5">
              вулиця Шолом-Алейхема, 4/26 <br />
              49044
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-black lg:w-[40%] flex justify-center rounded-[30px] mt-10 items-center text-[32px] cursor-pointer h-[350px] active:opacity-0 transition-all duration-500 mb-10 overflow-hidden"
          onClick={() => setIsShowMap(!isShowMap)}
        >
          {(isShowMap && (
            <iframe
              className="w-[100%] h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21164.227262803957!2d35.060611532885275!3d48.46557730205898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3f9aa35a07d%3A0x4f008f86dfa3a7e8!2z0J3QsNCx0LXRgNC10LbQvdCw0Y8g0JTQvdC10L_RgNCw!5e0!3m2!1sru!2sua!4v1700082147773!5m2!1sru!2sua"
            />
          )) || <div className="text-white">Показати мапу</div>}
        </div>
      </div>
    </div>
  );
}
