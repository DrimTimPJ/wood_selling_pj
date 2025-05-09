import { useState } from 'react'

interface UsePostResponse<T> {
  data: T | null
  error: string | null
  isLoading: boolean
  postRequest: () => Promise<void>
}

const usePost = <T,>(url: string, body: object): UsePostResponse<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const postRequest = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
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

  return { data, error, isLoading, postRequest }
}

export default usePost
