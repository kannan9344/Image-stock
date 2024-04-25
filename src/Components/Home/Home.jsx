import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Image from "./Image";
import { Data } from "../../App";
import Modal from "../Modal/Modal";
import Tag from "../Tags/Tag";
const Home = () => {
  const [color, setColor] = useState("");
  const [orientation, setOrientation] = useState("");
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);
  const [modalimage,setModalimage]=useState("");
  const [modal, setModal] = useState(false);
  const [oristate, setOristate] = useState(false);
  const [sizestate, setSizestate] = useState(false);
  const [colorstate, setColorstate] = useState(false);
  const { setUrl, query, data,setQuery, fav, setFav, wish, setWish } = useContext(Data);
  useEffect(() => {
    setUrl(
      `https://api.pexels.com/v1/search?&per_page=100&query=${query}&orientation=${orientation}&page=${count}&size=${size}&color=${color}`
    );
  }, [query, orientation, size, color, count]);
  return (
    <>
      <div className="filters">
        <div
          className="fil-col orientation"
          onClick={() => setOristate(!oristate)}
        >
          <div className="fil-text">All Orientations</div>
          <i className="fa fa-chevron-down"></i>
          <ul className={oristate ? "active" : ""}>
            <li onClick={() => setOrientation("landscape")}>Horizontal</li>
            <li onClick={() => setOrientation("portrait")}>Vertical</li>
            <li onClick={() => setOrientation("square")}>Square</li>
          </ul>
        </div>
        <div className="fil-col size" onClick={() => setSizestate(!sizestate)}>
          <div className="fil-text">All Sizes</div>
          <i className="fa fa-chevron-down"></i>
          <ul className={sizestate ? "active" : ""}>
            <li onClick={() => setSize("large")}>Large</li>
            <li onClick={() => setSize("medium")}>Medium</li>
            <li onClick={() => setSize("small")}>Small</li>
          </ul>
        </div>
        <div
          className="fil-col color-row"
          onClick={() => setColorstate(!colorstate)}
        >
          <div className="fil-text">All Colors</div>
          <i className="fa fa-chevron-down"></i>
          <ul className={colorstate ? "colors active" : "colors"}>
            <li className="color" onClick={() => setColor("red")}></li>
            <li className="color" onClick={() => setColor("orange")}></li>
            <li className="color" onClick={() => setColor("yellow")}></li>
            <li className="color" onClick={() => setColor("green")}></li>
            <li className="color" onClick={() => setColor("turquoise")}></li>
            <li className="color" onClick={() => setColor("blue")}></li>
            <li className="color" onClick={() => setColor("violet")}></li>
            <li className="color" onClick={() => setColor("pink")}></li>
          </ul>
        </div>
      </div>
      <Tag setQuery={setQuery} />
      <div className="image-container">
        {data.map((item) => {
          return (
            <Image
              key={item.id}
              item={item}
              setFav={setFav}
              fav={fav}
              setWish={setWish}
              wish={wish}
              setModal={setModal}
              modal={modal}
              setModalimage={setModalimage}
              modalimage={modalimage}
            />
          );
        })}
      </div>
      <div className="btns">
        <div className="btn" onClick={() => setCount(count + 1)}>
          More Images
        </div>
      </div>
    <Modal modal={modal} setModal={setModal} modalimage={modalimage}/>
    </>
  );
};

export default Home;
