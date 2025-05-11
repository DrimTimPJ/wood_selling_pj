'use client'

import useAuthStore from '@/store/authStore'
import useUpdateStore from '@/store/updateStore'
import { useState, useEffect } from 'react'

interface UseGetResponse<T> {
  data: T | null
  error: string | null
}

const useGet = <T,>(
  url: string | null,
  trigger: boolean
): UseGetResponse<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)

  const token = useAuthStore((state) => state.token)
  const setIsUpdating = useUpdateStore((state) => state.setIsUpdating)

  useEffect(() => {
    const fetchData = async () => {
      setIsUpdating(true)
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
          setIsUpdating(false)
        }
      }
    }

    fetchData()
  }, [url, trigger])

  return { data, error }
}

export default useGet
