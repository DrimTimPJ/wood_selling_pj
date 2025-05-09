'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { inputData } from './type'

import Button from '@/shared/button/button'

export default function LoginForm() {
  const { register, handleSubmit } = useForm<inputData>()
  const [data, setData] = useState<inputData>()

  return (
    <form onSubmit={handleSubmit((data) => setData(data))}>
      <input
        className="border border-[rgb(114,139,173)] p-3 placeholder:text-[#D9D9D9] text-white w-[100%] mt-5 rounded-2xl md:w-[50%] md:block m-0 m-auto lg:w-[35%]"
        type="text"
        {...register('username')}
        placeholder="Username"
        required
      />
      <input
        className="border border-[#728BAD] p-3 placeholder:text-[#D9D9D9] text-white w-[100%] mt-5 rounded-2xl md:w-[50%] md:block m-0 m-auto lg:w-[35%]"
        type="text"
        {...register('password')}
        placeholder="Your password"
        required
      />
      <div className="w-[40%] mt-5 m-0 m-auto lg:w-[30%]">
        <Button text="Send" />
      </div>
    </form>
  )
}
