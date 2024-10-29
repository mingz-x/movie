import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const List = ({title, name, on, data, thumb, type}) => {
    let navigator = useNavigate()

  return (
    <div className='m-t'>
        <div className='title'>
            <div><h3 className={name} onClick={()=>navigator(on)}>{title}</h3></div>
            <button onClick={()=>navigator(on)}>VIEW MORE</button>
        </div>
        <div className='top20'>
            <Swiper 
            loop={true} 
            slidesPerView={5}
            // slidesPerGroup={5}
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper">
                {
                    data.map((obj)=>
                        <SwiperSlide key={obj.id}>
                            <figure className='poster' onClick={()=>navigator('/content',{state:{id:obj.id, type:[type]}})}>
                                <img src={'https://image.tmdb.org/t/p/original/'+obj.poster_path}/>
                                <figcaption>{obj[thumb]}</figcaption>
                            </figure>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    </div>
  )
}

export default List