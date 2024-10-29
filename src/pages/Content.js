import React, { useState } from 'react'
import Detail from '../component/Detail';
import { useEffect } from 'react'
import { store } from '../store/store';
import { useLocation } from 'react-router-dom';
import { detail } from '../api/movies';


const Content = () => {
  let {data,dataCtrl} = store();
  let {state} = useLocation();
  let [info,setInfo] = useState();

  console.log(state);

  useEffect(()=>{
    (async function(){
        setInfo(  await detail(state.id, state.type)  )
    }())
  },[])

  if(!info)return<>준비중..</>

  console.log(info);

  // name="m" on="/movie" title=
  return (
    <div className='movie'>
      <Detail data={info} type={state.type} />
      {/* <Detail name="t" on="/movie" title="MOVIE" data={info} type='movie' /> */}
      {/* <Detail name="t" on="/tvseries" title="TV SERIES" data={data.tvTop} /> */}
    </div>
  )
}

export default Content