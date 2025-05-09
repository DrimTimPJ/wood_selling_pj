'use client'

import { useForm } from 'react-hook-form'
import usePost from '@/customHooks/usePost'
import routes from '@/contants/serverLinks'

import { inputData, ResponseData } from './type'

import Button from '@/shared/button/button'
import { useEffect } from 'react'

export default function LoginForm() {
  const { register, handleSubmit } = useForm<inputData>()

  const { data, error, isLoading, postRequest } = usePost<ResponseData>(
    routes.auth.login
  )

  const onSubmit = (data: inputData) => {
    postRequest(data)
  }

  useEffect(() => {
    if (!error && data?.token) {
      localStorage.setItem('token', data.token)
    }
  }, [error])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="border border-[rgb(114,139,173)] p-3 placeholder:text-[#D9D9D9] text-white w-[100%] mt-5 rounded-2xl md:w-[50%] md:block m-0 m-auto lg:w-[35%]"
        type="text"
        {...register('username')}
        placeholder="Username"
        required
      />
      <input
        className="border border-[#728BAD] p-3 placeholder:text-[#D9D9D9] text-white w-[100%] mt-5 rounded-2xl md:w-[50%] md:block m-0 m-auto lg:w-[35%]"
        type="password"
        {...register('password')}
        placeholder="Your password"
        required
      />
      <div className="w-[40%] mt-5 m-0 m-auto lg:w-[30%]">
        <Button text="Send" />
      </div>
      {error && <p className="m-0 m-auto">Error: {error}</p>}
    </form>
  )
}
