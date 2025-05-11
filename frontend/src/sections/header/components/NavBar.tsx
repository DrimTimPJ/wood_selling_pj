import Link from 'next/link'

import { NAV_BAR_LINKS } from '@/constants/clientLinks'

export default function NavBar() {
  return (
    <div className="md:flex md:justify-around text-white md:text-lg lg:text-2xl w-[100%] md:w-[60%]">
      {Object.values(NAV_BAR_LINKS).map((nav, index) => (
        <div
          className="mt-15 md:mt-0 cursor-pointer text-center transition-all active:scale-[1] hover:scale-[1.1]"
          key={index}
        >
          <Link href={nav.link}>{nav.name}</Link>
        </div>
      ))}
    </div>
  )
}
