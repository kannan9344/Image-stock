import React, { useContext } from "react";
import Fav_empty from "/src/assets/fav_empty.jpg"
import "./Favorite.css";
import { Data } from "../../App";
const Favorite = () => {
  const { fav, setFav } = useContext(Data);
  const deleteFav=(id)=>{
    setFav(fav.filter((data)=>data.id!==id));
  }
  return (
    <div className="fav-container">
      {fav.length==0?<img src={Fav_empty} className="empty-image"></img>:fav.map((favdata)=>{
        return(
          <div className="image" key={favdata.id}>
        <img src={favdata?.src?.medium} />
        <div className="icons">
          <i className="fa fa-trash" onClick={()=>deleteFav(favdata.id)} ></i>
        </div>
      </div>
        )
      })}
    </div>
  );
};

export default Favorite;
