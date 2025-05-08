import QuestionForm from '@/forms/questionForm';

export default function AskQuestionSection() {
  return (
    <div className="bg-[#222021] text-white pb-20 pt-5">
      <div className="w-[90%] m-0 m-auto md:text-center">
        <div className="text-[36px] md:text-[48px] lg:text-[72px]">
          Any questions?
        </div>
        <div className="pt-5 w-[80%] text-[12px] md:m-0 md:m-auto md:text-[16px] lg:text-3xl lg:w-[50%]">
          Write to us and we will be sure to answer all your questions and give
          you a comprehensive consultation
        </div>
        <div className="pt-10">
          <QuestionForm />
        </div>
      </div>
    </div>
  );
}