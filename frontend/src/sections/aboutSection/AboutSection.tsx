import Image from 'next/image'

export default function AboutSection() {
  return (
    <div className="bg-[#222021] text-white pt-10 pb-10">
      <div>
        <div className="bg-[#1a181a] rounded-r-4xl pt-10 w-[90%] lg:w-[90%] shadow-[0_4px_20px_rgba(255,255,255,0.6)]">
          <div className="pl-5 md:flex md:justify-around xl:pl-20 lg:pl-10">
            <div className="w-[100%]">
              <div className="text-[64px] lg:text-[72px]">Про нас:</div>
              <div className="w-[80%] mt-5 text-[14px] md:text-[24px] lg:text-[30px] xl:text-[42px]">
                <strong>BIO CWT</strong> - Ми виготовляємо вироби з масиву дерева 
                за індивідуальними кресленнями. Ми виготовляємо стільці, крісла, шафи, ліжка та багато іншого у власній майстерні, 
                оснащеній усім необхідним промисловим обладнанням.
              </div>
            </div>
            <div className="md:w-[80%] mt-15 xl:h-[750px]">
              <Image
                height={200}
                width={200}
                className={`relative mt-10 bg-[#1a181a] p-2 rounded-4xl z-1 w-[175px] h-[175px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]
                           xl:w-[350px] xl:h-[350px]`}
                src={'/images/worker(1).svg'}
                alt="image of worker"
              />
              <Image
                height={125}
                width={125}
                className={`relative left-30 bottom-50 w-[125px] h-[125px] md:left-40 md:bottom-60 lg:bottom-80 lg:w-[150px] lg:h-[150px] lg:left-55
                           xl:w-[200px] xl:h-[200px] xl:left-60 xl:bottom-95`}
                src={'/images/worker(2).svg'}
                alt="image of worker"
              />
              <Image
                height={150}
                width={150}
                className={`relative left-25 bottom-30 w-[150px] h-[150px] md:left-30 md:bottom-30 lg:h-[200px] lg:w-[200px] lg:bottom-40 lg:left-40
                           xl:w-[275px] xl:h-[275px] xl:left-45 xl:bottom-70`}
                src={'/images/worker(3).svg'}
                alt="image of worker"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
