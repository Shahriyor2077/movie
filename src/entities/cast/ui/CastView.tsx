import { memo, type FC } from 'react'
import { useCast } from '../model/useCast'
import { createImageUrl } from '@/shared/utils'
import { useNavigate } from 'react-router-dom'
import { Loading } from '@/shared/ui/Loading'

interface Props {
  id: string
  type: string
}

export const CastView:FC<Props> = memo((props) => {
  const {id, type} = props
  const {getCasts} = useCast()
  const {data, isLoading} = getCasts(id)
  const navigate = useNavigate()
  
  if (isLoading) return <Loading />;
  
  return (
    <div className='container'>
      <div className='flex gap-[16px] overflow-x-auto scrollbar-hidden'>
        {
          data && data[type]?.map((item:any) => (
            <div onClick={() => navigate(`/crew/${item.id}`)} className='min-w-[150px] w-full' key={item.id}>
              <img src={createImageUrl(item.profile_path)} className=' cursor-pointer  w-full rounded-xl' alt="" />
              <h3 className='font-medium'>{item.original_name}</h3>
              <p className='text-gray-500'>
                {type === "cast" ? item.character : item.job}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
})
