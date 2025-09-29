import { memo } from 'react'
import { Select } from 'antd'
import { useSearchParams } from 'react-router-dom'

const GENRE_OPTIONS = [
  { value: '28', label: 'Action' },
  { value: '12', label: 'Adventure' },
  { value: '16', label: 'Animation' },
  { value: '35', label: 'Comedy' },
  { value: '80', label: 'Crime' },
  { value: '99', label: 'Documentary' },
  { value: '18', label: 'Drama' },
  { value: '10751', label: 'Family' },
  { value: '14', label: 'Fantasy' },
  { value: '36', label: 'History' },
  { value: '27', label: 'Horror' },
  { value: '10402', label: 'Music' },
  { value: '9648', label: 'Mystery' },
  { value: '10749', label: 'Romance' },
  { value: '878', label: 'Science Fiction' },
  { value: '10770', label: 'TV Movie' },
  { value: '53', label: 'Thriller' },
  { value: '10752', label: 'War' },
  { value: '37', label: 'Western' },
]

export const MovieGenre = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams()
  const current = searchParams.get('with_genres')?.split(',').filter(Boolean) ?? []

  const onChange = (value: string[]) => {
    if (value.length) {
      searchParams.set('with_genres', value.join(','))
    } else {
      searchParams.delete('with_genres')
    }
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }

  return (
    <div className="my-3 container">
      <div className='container' >
        <Select
          mode="multiple"
          allowClear
          value={current}
          onChange={onChange}
          options={GENRE_OPTIONS}
          placeholder="Select genres"
          style={{ width: 300 }}
        />
      </div>
    </div>
  );
})


