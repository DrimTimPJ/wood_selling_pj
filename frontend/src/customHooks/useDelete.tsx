import { useState } from 'react'

interface UseDeleteResponse {
  success: boolean
  error: string | null
  isLoading: boolean
  deleteRequest: () => Promise<void>
}

const useDelete = (url: string): UseDeleteResponse => {
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const deleteRequest = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong')
      }

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setIsLoading(false)
    }
  }

  return { success, error, isLoading, deleteRequest }
}

export default useDelete
