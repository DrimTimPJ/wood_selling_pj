'use client'

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import usePost from '@/customHooks/usePost'
import routes from '@/contants/serverLinks'

import { inputData, ResponseData } from './type'
import Button from '@/shared/button/button'

export default function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  const { register, handleSubmit } = useForm<inputData>()

  const { data, error, isLoading, postRequest } = usePost<ResponseData>(
    routes.auth.login
  )

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem('token', data.token)
      setIsLoggedIn(true)
    }
  }, [data])

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn])

  if (isLoggedIn) return null

  return (
    <form onSubmit={handleSubmit((data: inputData) => postRequest(data))}>
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
        <Button text={isLoading ? 'Loading...' : 'Send'} />
      </div>
      {error && <p className="m-0 m-auto text-red-500">Error: {error}</p>}
    </form>
  )
}
