'use client'

import useAuthStore from '@/store/authStore'
import { useState, useEffect } from 'react'

interface UseGetResponse<T> {
  data: T | null
  error: string | null
  isLoading: boolean
}

const useGet = <T,>(
  url: string | null,
  trigger: boolean
): UseGetResponse<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const token = useAuthStore((state) => state.token)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      if (url) {
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              ...(token && {
                Authorization: token,
              }),
            },
          })
          const result = await response.json()

          if (!response.ok) {
            throw new Error(result.message || 'Something went wrong')
          }

          setData(result)
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Unknown error')
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchData()
  }, [url, trigger])

  return { data, error, isLoading }
}

export default useGet
