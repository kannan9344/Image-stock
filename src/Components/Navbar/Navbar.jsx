import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Data } from "../../App";

const Navbar = () => {
  const { setQuery,fav,wish } = useContext(Data);
  const inputRef=useRef();
  const setNewQuery = (e) => {
    if (e.key == "Enter") {
      setQuery(e.target.value);
    }
  };
  const updateQuery=()=>{
    if(inputRef.current.value !==""){
      setQuery(inputRef.current.value);
    }
  }
  return (
    <header>
      <nav>
        <div className="search">
          <input
            type="text"
            placeholder="Search here"
            onKeyDown={setNewQuery}
            ref={inputRef}
          />
          <i className="fa fa-search" onClick={updateQuery} ></i>
        </div>
        <ul>
          <Link className="list" to={"/"}>
            <i className="fa fa-home"></i>
          </Link>
          <Link className="list" to={"/Favorite"}>
            <i className="fa-solid fa-heart"></i>
            <span>{fav.length?fav.length:0}</span>
          </Link>
          <Link className="list" to={"/Wishlist"}>
            <i className="fa-solid fa-bookmark"></i>
            <span>{wish.length?wish.length:0}</span>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
