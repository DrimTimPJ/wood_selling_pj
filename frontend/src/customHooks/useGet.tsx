import { useState, useEffect } from 'react'

interface UseGetResponse<T> {
  data: T | null
  error: string | null
  isLoading: boolean
}

const useGet = <T,>(url: string): UseGetResponse<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
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

    fetchData()
  }, [url])

  return { data, error, isLoading }
}

export default useGet
