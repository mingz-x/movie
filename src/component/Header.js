import React from 'react'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    let navigator = useNavigate()
  return (
    <div className='movie'>
      <h1 onClick={()=>navigator("/")}><span>M</span>OVIE</h1>
      <div className='header'>
        <h3 onClick={()=>navigator("/")}><span>M</span>OVIE</h3>
        <div>          
          <button onClick={()=>navigator("/movie")}>MOVIE</button>
          <button onClick={()=>navigator("/tvseries")}>TV SERIES</button>
        </div>
      </div>
    </div>
    
  )
}

export default Header