'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/shared/button/button';

export default function QuestionForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState<string>('');

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input
        className="border border-[#728BAD] p-3 placeholder:text-[#D9D9D9] text-white w-[100%] mt-5 rounded-2xl md:w-[50%] md:block m-0 m-auto lg:w-[35%]"
        type="text"
        {...register('name')}
        placeholder="Your name"
        required
      />
      <input
        className="border border-[#728BAD] p-3 placeholder:text-[#D9D9D9] text-white w-[100%] mt-5 rounded-2xl md:w-[50%] md:block m-0 m-auto lg:w-[35%]"
        type="text"
        {...register('phonenumber')}
        placeholder="Your telephone number"
        required
      />
      <textarea
        className="border border-[#728BAD] p-3 placeholder:text-[#D9D9D9] text-white w-[100%] mt-5 rounded-2xl md:w-[50%] md:block m-0 m-auto lg:w-[35%]"
        {...register('question')}
        placeholder="Your question"
      />
      <div className="w-[40%] mt-5 m-0 m-auto lg:w-[30%]">
        <Button text="Send" />
      </div>
    </form>
  );
}