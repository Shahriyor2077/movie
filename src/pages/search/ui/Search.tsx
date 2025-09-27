import { memo } from "react"
import { SearchMovie } from "@/features/search-movie"


export const Search = memo(() => {
  return (
    <div className="container" >
        <SearchMovie/>
    </div>
  )
})
