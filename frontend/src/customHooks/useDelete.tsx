import { useState } from 'react'
import useAuthStore from '@/store/authStore'
import useUpdateStore from '@/store/updateStore'

interface UseDeleteResponse {
  success: boolean
  error: string | null
  isLoading: boolean
  deleteRequest: () => Promise<void>
}

const useDelete = (url: string, updateTrigger: Function): UseDeleteResponse => {
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const token = useAuthStore((state) => state.token)

  const deleteRequest = async () => {
    setIsLoading(true)
    console.log('first')
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          ...(token && { Authorization: token }),
        },
      })

      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      if (updateTrigger) {
        updateTrigger()
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
