import { memo, type FC, useState } from 'react'
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
  const [gender, setGender] = useState<'all'|'male'|'female'>('all')
  
  if (isLoading) return <Loading />;
  
  return (
    <div className='container'>
      <div className='flex items-center justify-end mb-2'>
        <select
          value={gender}
          onChange={(e)=>setGender(e.target.value as any)}
          className='bg-black/40 text-white text-xs sm:text-sm rounded px-2 py-1 border border-white/10'
        >
          <option value='all'>All</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
      </div>
      <div className='flex gap-[16px] overflow-x-auto scrollbar-hidden'>
        {
          data && data[type]?.filter((item:any)=>{
            if (gender === 'all') return true;
            if (gender === 'male') return item.gender === 2;
            return item.gender === 1;
          }).map((item:any) => (
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
