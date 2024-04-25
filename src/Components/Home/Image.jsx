import React from "react";
import saveAs from "file-saver";
const Image = ({ item, setFav, fav, setWish, wish, setModal, modal,setModalimage }) => {
  const downloadImage = (itemimage) => {
    saveAs(itemimage, "image.jpeg");
  };
  const addFav = (favitem) => {
    if (fav.includes(favitem)) {
      return;
    } else {
      setFav([...fav, favitem]);
    }
  };
  const addWish = (wishitem) => {
    if (wish.includes(wishitem)) {
      return;
    } else {
      setWish([...wish, wishitem]);
    }
  };
  const setModalstatus=()=>{
    setModal(!modal);
    setModalimage(item);
  }
  return (
    <div className="image">
      <img src={item?.src?.medium}  onClick={setModalstatus} alt="" />
      <div className="icons">
        <i
          className={
            wish.includes(item)
              ? "fa-regular fa-bookmark active"
              : "fa-regular fa-bookmark"
          }
          onClick={() => addWish(item)}
        ></i>
        <i
          className={
            fav.includes(item)
              ? "fa-regular fa-heart active"
              : "fa-regular fa-heart"
          }
          onClick={() => addFav(item)}
        ></i>

        <i
          className="fa-solid fa-arrow-down"
          onClick={() => downloadImage(item?.src?.medium)}
        ></i>
      </div>
    </div>
  );
};

export default Image;
