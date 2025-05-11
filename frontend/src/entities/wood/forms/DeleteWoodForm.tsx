'use client'

import useDelete from '@/customHooks/useDelete'

import Button from '@/shared/button/button'
import routes from '@/contants/serverLinks'
import useUpdateStore from '@/store/updateStore'

interface DeleteWoodFormProps {
  _id: string
}

const DeleteWoodForm: React.FC<DeleteWoodFormProps> = ({ _id }) => {
  const triggerUpdateWoods = useUpdateStore((state) => state.triggerUpdateWoods)

  const { success, error, deleteRequest } = useDelete(
    `${routes.wood.base}/${_id}`,
    triggerUpdateWoods
  )

  return (
    <>
      <div className="pt-10" onClick={() => deleteRequest()}>
        <Button text="Delete" />
      </div>
    </>
  )
}

export default DeleteWoodForm
