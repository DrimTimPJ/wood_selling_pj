import Link from 'next/link'

import Button from '@/shared/button/button'
import { NAV_BAR_LINKS } from '@/contants/clientLinks'

export default function NotFoundPage() {
  return (
    <div className="bg-cover bg-center bg-[#222021] text-white text-center ">
      <div className="relative left-0 right-0 top-0 bottom-0 bg-[#222021] opacity-80 pb-10 p-5 md:pb-15 md:p-10 lg:pb-20">
        <div className="flex justify-center items-center text-[150px] md:text-[200px]">
          404
        </div>
        <div className="text-[36px] md:text-[48px] lg:text-[56px]">Woops</div>
        <div className="mt-5 text-[#FFDBBB] text-[24px] md:text-[32px] lg:text-[42px]">
          Oh, you must be lost, there is no such page.
        </div>
        <div className="mt-5 w-[100%] md:w-[70%] lg:w-[60%] m-0 m-auto">
          <Link href={NAV_BAR_LINKS.home.link}>
            <Button text="Go to the home page" />
          </Link>
        </div>
      </div>
    </div>
  )
}
