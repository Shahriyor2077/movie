import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

export const Cast = memo(() => {
    const {id} =useParams()
  return (
    <div>Cast</div>
  )
})
