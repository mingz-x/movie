import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contents = ({name, title, data, thumb, type}) => {
  let navigator = useNavigate()
  

  return (
    <div className='big-c'>
        <div className='search'>
            <span><h2 className={name} onClick={()=>navigator("/")}>{title}</h2></span>
            <div>
                <input type='text'/>
                SEARCH
                <button><img src='./search.svg'/></button>
            </div>
        </div>
        <div className='content'>
            <ul>
                {
                    data.map((obj)=>
                        <li key={obj.id} onClick={()=>navigator('/content', {state:{id:obj.id, type:[type]}})}>
                            <figure>
                                <img src={'https://image.tmdb.org/t/p/original/'+obj.poster_path}/>
                                <figcaption>{obj[thumb]}</figcaption>
                            </figure>
                        </li>
                    )
                }
            </ul>
            <button>MORE<img src='./down.svg'/></button>
        </div>
    </div>
  )
}

export default Contents