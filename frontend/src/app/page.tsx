import AboutSection from "@/sections/aboutSection/AboutSection";
import AskQuestionSection from "@/sections/askQuestionSection/AskQuestionSection";
import OurWorkSection from "@/sections/ourWorkSection.tsx/OurWorkSection";
import WoodWeUseSection from "@/sections/woodWeUseSection/WoodWeUseSection";
import PriceListSection from "@/sections/priceListSection/priceListSection";


export default function Home() {
  return (
    <div>
        <WoodWeUseSection/>
        <PriceListSection/>
        <OurWorkSection/>
        <AboutSection/>
        <AskQuestionSection/>
    </div>
  );
}
