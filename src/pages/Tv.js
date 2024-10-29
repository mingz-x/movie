import React, { useEffect } from 'react'
import MovieTv from '../component/MovieTv'
import { store } from '../store/store';

const Tv = () => {
    let {data,dataCtrl} = store();

  return (
    <div className='movie'>
        <MovieTv  name="t" title="TV SERIES" data={data.tvTop} thumb="name" type='tv' />
    </div>
  )
}

export default Tv