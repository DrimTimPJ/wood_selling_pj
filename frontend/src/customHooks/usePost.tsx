import { useState } from 'react'
import useAuthStore from '@/store/authStore'

interface UsePostResponse<T> {
  data: T | null
  error: boolean | null
  isLoading: boolean
  postRequest: (body: object) => Promise<void>
}

const usePost = <T,>(
  url: string,
  updateTrigger?: Function
): UsePostResponse<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const token = useAuthStore((state) => state.token)

  const postRequest = async (body: object) => {
    setIsLoading(true)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: token }),
        },
        body: JSON.stringify(body),
      })
      const result = await response.json()

      if (updateTrigger) {
        updateTrigger()
      }

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong')
      }

      setError(false)
      setData(result)
    } catch (err) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, error, isLoading, postRequest }
}

export default usePost
