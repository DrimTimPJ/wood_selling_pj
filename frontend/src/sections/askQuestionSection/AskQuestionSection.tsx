import QuestionForm from '@/forms/questionForm/QuestionForm.tsx'

export default function AskQuestionSection() {
  return (
    <div className="bg-[#222021] text-white pb-20 pt-5">
      <div className="w-[90%] m-0 m-auto md:text-center">
        <div className="text-[36px] md:text-[48px] lg:text-[72px]">
          Маєте питання? 
        </div>
        <div className="pt-5 w-[80%] text-[12px] md:m-0 md:m-auto md:text-[16px] lg:text-3xl lg:w-[50%]">
          Напишіть нам, і ми обов'язково відповімо на всі ваші запитання та надамо вам консультацію.
        </div>
        <div className="pt-10">
          <QuestionForm />
        </div>
      </div>
    </div>
  )
}
