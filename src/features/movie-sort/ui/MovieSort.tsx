import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Select } from 'antd'

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort_by = searchParams.get('sort_by') ?? 'popularity.desc'

  const onChange = (value: string) => {
    searchParams.set('sort_by', value)
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }

  return (
    <div className=" container my-3">
      <Select
        className="w-60"
        placeholder="Sort by"
        value={sort_by}
        onChange={onChange}
        options={[
          { value: 'popularity.desc', label: 'Popular' },
          { value: 'vote_average.asc', label: 'Vote -' },
          { value: 'vote_average.desc', label: 'Vote +' }
        ]}
      />
    </div>
  )
})
