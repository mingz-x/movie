import React from 'react'
import { useNavigate } from 'react-router-dom'

// import { useRef, useEffect } from 'react'

const Detail = ({data, type}) => {
    let navigator = useNavigate()
    
    let eee = (type=='tv') ? data['name']:data['title'];
    let ttt = (type=='tv') ? "TV SERIES":"MOVIE";
    let aaa = (type=='tv') ? '/tvseries':'/movie';
    let ccc = (type=='tv') ? 't':'m';

    let yt = data.videos.results;


  return (
    <div className='detail'>
        <div className='top-C'>
            <div className='name'><h2 className={ccc} onClick={()=>navigator(aaa)}>{ttt}</h2></div>        
            <div key={data.id} className='top-D'>
                <div className='top'>
                    <div>
                        <h2>{eee}</h2>
                        <p>{data.overview}</p>
                        <div><h3>WATCH NOW</h3></div>
                    </div>
                    <figure><img src={'https://image.tmdb.org/t/p/original/'+data.poster_path}/></figure>
                </div>
                <div className='bgimg'><img src={'https://image.tmdb.org/t/p/original/'+data.backdrop_path}/></div>
            </div>
        </div>
        <div className='top-C'>
            <div className='name'><h2 className='tr'>TRAILER</h2></div>
            <div key={data.id} className='top-D'>
                {
                    yt.map((obj,n)=>
                        (n<3) ? (
                            <div key={obj.id}>
                                <h2>{obj.name}</h2>
                                <iframe width="100%" height="1000" src={"https://www.youtube.com/embed/"+yt[n].key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
                            </div>
                        ) : ''
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Detail



{/*
    <span><h2 className={name}>TRAILER</h2></span>
    {
        data.map((obj,k)=>
            (k<1) ? (
                <div key={obj.id} className='top-D'>
                    <div className='top'>
                        <div>
                            <h2>{obj.title}</h2>
                            <p>{obj.overview}</p>
                            <div><h3 onClick={()=>scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>WATCH NOW</h3></div>
                        </div>
                        <figure><img src={'https://image.tmdb.org/t/p/original/'+obj.poster_path}/></figure>
                    </div>
                    <div className='bgimg'><img src={'https://image.tmdb.org/t/p/original/'+obj.backdrop_path}/></div>
                </div>
            ) : ''
        )
    }
*/}

{/* 
    {
        data.map((obj,k)=>
            (k<1) ? (
                <div key={obj.id} className='top-D'>
                    <div className='top'>
                        <div>
                            <h2>{obj.title}</h2>
                            <p>{obj.overview}</p>
                            <div><h3>WATCH NOW</h3></div>
                        </div>
                        <figure><img src={'https://image.tmdb.org/t/p/original/'+obj.poster_path}/></figure>
                    </div>
                    <div className='bgimg'><img src={'https://image.tmdb.org/t/p/original/'+obj.backdrop_path}/></div>
                </div>
            ) : ''
        )
    }
*/}