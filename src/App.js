import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, { useEffect } from 'react';

import './App.css';
import Header from './component/Header';
import Main from './pages/Main';
import Movie from './pages/Movie';
import Tv from './pages/Tv';
import Content from './pages/Content';
import { store } from './store/store';

function App() {
  let {data,dataCtrl} = store();
    useEffect(()=>{
      dataCtrl();
    },[])
    if(!data.movieTop) return <>준비중..</>

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/movie' element={<Movie/>}/>
          <Route path='/tvseries' element={<Tv/>}/>
          <Route path='/content' element={<Content/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
