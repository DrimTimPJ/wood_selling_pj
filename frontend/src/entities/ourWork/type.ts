
interface OurWorkProps {
    _id:string,
    image:string,
    price:number
}

type InputOurWork = Omit<OurWorkProps,'_id'>

export type {OurWorkProps,InputOurWork}