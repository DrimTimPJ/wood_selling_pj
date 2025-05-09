interface inputData {
    name:string,
    telephoneNumber:string,
    question:string
}

interface responseData extends inputData {
    _id:string
}

export type {inputData,responseData}