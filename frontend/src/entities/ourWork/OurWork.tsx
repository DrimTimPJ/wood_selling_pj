'use client'

import routes from '@/contants/serverLinks'
import { OurWorkProps } from './type'
import useDelete from '@/customHooks/useDelete'
import Button from '@/shared/button/button'
import useAuthStore from '@/store/authStore'
import useUpdateStore from '@/store/updateStore'

const OurWork: React.FC<OurWorkProps> = ({ image, price, _id }) => {
  const triggerUpdateWorks = useUpdateStore(
    (state) => state.triggerUpdateOurWork
  )

  const { success, error, deleteRequest } = useDelete(
    `${routes.ourWork.base}/${_id}`,
    triggerUpdateWorks
  )

  const token = useAuthStore((state) => state.token)

  return (
    <div>
      <img
        className="w-[90%] md:w-[80%] lg:w-[70%] m-0 m-auto max-w-full h-[200px] md:h-[350px] lg:h-[400px] xl:h-[500px]"
        src={image}
        alt={image}
      />
      <div className="text-[16px] pb-20 pl-10 pr-10">
        <div className="pt-5 text-center text-[24px]">Price: {price}</div>
        {token && (
          <div
            className="pt-10 w-[30%] m-0 m-auto"
            onClick={() => deleteRequest()}
          >
            <Button text={'Delete'} />
          </div>
        )}
      </div>
    </div>
  )
}

export default OurWork
