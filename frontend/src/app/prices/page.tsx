import AskQuestionSection from "@/sections/askQuestionSection/AskQuestionSection";
import OurWorkSection from "@/sections/ourWorkSection.tsx/OurWorkSection";
import PriceListSection from "@/sections/priceListSection/priceListSection";


export default function Page(){
    return(
        <>
            <PriceListSection/>
            <OurWorkSection/>
            <AskQuestionSection/>
        </>
    )
}