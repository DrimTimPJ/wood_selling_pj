'use client'

import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import useAuthStore from '@/store/authStore'
import usePost from '@/customHooks/usePost'
import routes from '@/constants/serverLinks'

import { inputData, ResponseData } from './type'
import Button from '@/shared/button/button'

export default function LoginForm() {
  const router = useRouter()
  const { token, setToken } = useAuthStore()

  const { register, handleSubmit } = useForm<inputData>()
  const { data, error, isLoading, postRequest } = usePost<ResponseData>(
    routes.auth.login
  )

  useEffect(() => {
    if (data?.token) {
      setToken(data.token)
      localStorage.setItem('token', data.token)
    }
  }, [data, setToken])

  useEffect(() => {
    if (token) {
      router.push('/')
    }
  }, [token, router])

  if (token) return null

  return (
    <form onSubmit={handleSubmit((data: inputData) => postRequest(data))}>
      <input
        className="border border-[rgb(114,139,173)] p-3 placeholder:text-[#D9D9D9] text-white w-full mt-5 rounded-2xl md:w-[50%] md:block m-auto lg:w-[35%]"
        type="text"
        {...register('username')}
        placeholder="Username"
        required
      />
      <input
        className="border border-[#728BAD] p-3 placeholder:text-[#D9D9D9] text-white w-full mt-5 rounded-2xl md:w-[50%] md:block m-auto lg:w-[35%]"
        type="password"
        {...register('password')}
        placeholder="Your password"
        required
      />
      <div className="w-[40%] mt-5 m-auto lg:w-[30%]">
        <Button text={isLoading ? 'Loading...' : 'Send'} />
      </div>
      {error && <p className="text-center text-red-500 mt-2">Error: {error}</p>}
    </form>
  )
}
