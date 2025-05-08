'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import UseGetScreenSize from '@/customHooks/getScreenSize';

import NavBar from './components/NavBar';
import MobileNavBar from './components/MobileNavBar';

import { NAV_BAR_LINKS } from '@/contants/links';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowSize = UseGetScreenSize();

  return (
    <div className="bg-[#222021]">
      <div className="bg-[#1E0C06] h-20 rounded-b-4xl md:h-25 lg:h-30">
        <div className="w-[90%] justify-between flex m-0 m-auto pt-5 md:pt-7 lg:pt-10">
          <Link href={NAV_BAR_LINKS.home.link}>
            <Image
              height={100}
              width={100}
              src={'/icons/logo.svg'}
              alt="logo"
            />
          </Link>
          {windowSize.width < 768 && (
            <div className="flex items-center">
              <button
                className="text-white md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {!isMenuOpen && (
                  <Image
                    className="cursor-pointer"
                    height={30}
                    width={30}
                    src={'/icons/burgerIcon.svg'}
                    alt="button"
                  />
                )}
              </button>

              {isMenuOpen && (
                <div className="absolute left-0 right-0 top-0">
                  <MobileNavBar setFunc={setIsMenuOpen} />
                </div>
              )}
            </div>
          )}

          {windowSize.width >= 768 && <NavBar />}
        </div>
      </div>
    </div>
  );
}
