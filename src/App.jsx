import React, { createContext, useState } from 'react'
import Api from './Components/API/Api'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Favorite from './Components/Favorite/Favorite';
import Wishlist from './Components/Wishlist/Wishlist';
import Navbar from './Components/Navbar/Navbar';
export const Data=createContext();
const App = () => {
  const [query,setQuery]=useState("nature");
  const [url,setUrl]=useState(`https://api.pexels.com/v1/search?&per_page=100&query=${query}`);
  const [data,setData]=useState([]);
  const [fav,setFav]=useState([]);
  const [wish,setWish]=useState([]);
  return (
    <Data.Provider value={{url,setUrl,query,setQuery,data,setData,fav,setFav,wish,setWish}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Favorite' element={<Favorite/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
      </Routes>
       <Api/>
    </Data.Provider>
   
  )
}

export default App