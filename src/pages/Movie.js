import React, { Suspense, useEffect } from 'react'
import MovieTv from '../component/MovieTv'
import { store } from '../store/store';

const Movie = () => {
    let {data,dataCtrl} = store();

  return (
    <div className='movie'>
        <MovieTv name="m" title="MOVIE" data={data.movieTop} thumb="title" type='movie' />
    </div>
  )
}

export default Movie