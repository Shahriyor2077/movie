import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Select } from 'antd'
import { useTranslation } from 'react-i18next'

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort_by = searchParams.get('sort_by') ?? 'popularity.desc'

  const onChange = (value: string) => {
    searchParams.set('sort_by', value)
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }
  const {t}=useTranslation()

  return (
    <div className=" container my-3">
      <Select
        className="w-60"
        placeholder="Sort by"
        value={sort_by}
        onChange={onChange}
        options={[
          { value: "popularity.desc", label: t("popular") },
          { value: "vote_average.asc", label: t("voteMinus") },
          { value: "vote_average.desc", label: t("votePlus") },
        ]}
      />
    </div>
  );
})
