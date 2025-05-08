import SimpleSlider from "@/components/SimpleSlider";

const mockData: string[] = [
  '/images/ourWorkExample.svg',
  '/images/ourWorkExample.svg',
  '/images/ourWorkExample.svg',
  '/images/ourWorkExample.svg',
];

export default function OurWorkSection() {
  return (
    <div className="bg-[#222021] text-white text-[36px] md:text-[56px] lg:text-[72px] pt-10 pb-20">
      <div className="w-[80%] lg:w-[60%] m-auto m-0">
        <div className="pb-10 md:text-center">Our work</div>
        <div>
          <SimpleSlider values={mockData} />
        </div>
      </div>
    </div>
  );
}