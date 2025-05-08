import AskQuestionSection from "@/sections/askQuestionSection/AskQuestionSection";
import OurWorkSection from "@/sections/ourWorkSection.tsx/OurWorkSection";
import WoodWeUseSection from "@/sections/woodWeUseSection/woodWeUseSection";


export default function Page(){
    return(
        <>
            <OurWorkSection/>
            <WoodWeUseSection/>
            <AskQuestionSection/>
        </>
    )
}