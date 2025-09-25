import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DatePicker, Button } from 'antd'
import dayjs from 'dayjs'

export const MovieFilter = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams()
  const from = searchParams.get('release_date_from') ?? ''
  const to = searchParams.get('release_date_to') ?? ''

  const onRangeChange = (values: any) => {
    const [start, end] = values || []
    if (start) {
      searchParams.set('release_date_from', dayjs(start).format('YYYY-MM-DD'))
    } else {
      searchParams.delete('release_date_from')
    }
    if (end) {
      searchParams.set('release_date_to', dayjs(end).format('YYYY-MM-DD'))
    } else {
      searchParams.delete('release_date_to')
    }
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }

  const clearDates = () => {
    searchParams.delete('release_date_from')
    searchParams.delete('release_date_to')
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }

  return (
    <div className="my-3">
      <div className="mt-3 flex items-center gap-3">
        <DatePicker.RangePicker
          value={[
            from ? dayjs(from, 'YYYY-MM-DD') : null,
            to ? dayjs(to, 'YYYY-MM-DD') : null,
          ] as any}
          onChange={onRangeChange}
          allowEmpty={[true, true]}
        />
        <Button onClick={clearDates}>Clear</Button>
      </div>
    </div>
  )
})