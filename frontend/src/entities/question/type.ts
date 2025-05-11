interface QuestionProps {
    _id:string
    name:string,
    telephoneNumber:string,
    question:string
}

type QuestionInputData = Omit<QuestionProps,'_id'> 

export type {QuestionProps,QuestionInputData}