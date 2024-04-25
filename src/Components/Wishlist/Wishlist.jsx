import React, { useContext } from "react";
import Wish_empty from "/src/assets/wish_empty.png";
import "./Wishlist.css";
import { Data } from "../../App";
const Wishlist = () => {
  const { wish,setWish } = useContext(Data);
  const deleteWish=(id)=>{
    setWish(wish.filter((data)=>data.id!==id));
  }
  return (
    <div className="wish-container">
      {wish.length==0?<img src={Wish_empty} className="empty-image"></img>:wish.map((wishdata)=>{
        return(
          <div className="image" key={wishdata.id}>
        <img src={wishdata?.src?.medium} />
        <div className="icons">
          <i className="fa fa-trash" onClick={()=>deleteWish(wishdata.id)} ></i>
        </div>
      </div>
        )
      })}
    </div>
  )
}

export default Wishlist