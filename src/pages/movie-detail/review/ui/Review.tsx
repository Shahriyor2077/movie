import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useMovie } from '@/entities/movie'
import { Loading } from '@/shared/ui/Loading'

export const Review = memo(() => {
  const { id } = useParams()
  const { getMovieInfo } = useMovie()
  const { data, error, isLoading} = getMovieInfo(id as string, "reviews")

  if (isLoading) return <Loading />;
  
  if (error) {
    return <p className="container text-red-500">Failed</p>;
  }

  if (!data?.results?.length) {
    return <p className="container">No reviews yet.</p>;
  }

  return (
    <div>
      {data.results.map((review: any) => (
        <div key={review.id} className=" container mb-4 p-2 border-b">
          <div className="font-bold">{review.author}</div>
          <div className="text-sm">{review.content}</div>
        </div>
      ))}
    </div>
  )
})
