import { useState } from 'react'
import useAuthStore from '@/store/authStore'
import useUpdateStore from '@/store/updateStore'

interface UseDeleteResponse {
  success: boolean
  error: string | null
  deleteRequest: () => Promise<void>
}

const useDelete = (url: string, updateTrigger: Function): UseDeleteResponse => {
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const setIsUpdating = useUpdateStore((state) => state.setIsUpdating)
  const token = useAuthStore((state) => state.token)

  const deleteRequest = async () => {
    setIsUpdating(true)
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
      setIsUpdating(false)
    }
  }

  return { success, error, deleteRequest }
}

export default useDelete
