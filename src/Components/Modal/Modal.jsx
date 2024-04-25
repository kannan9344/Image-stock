import React from "react";
import saveAs from "file-saver";
import "./Modal.css";
const Modal = ({ modal, setModal, modalimage }) => {
  const downloadModalimage = (img) => {
    saveAs(img, "Modalimage.jpeg");
  };
  return (
    <div className={modal ? "modal-dialogue active" : "modal-dialogue"}>
      <div className="modal-content">
        <img src={modalimage?.src?.landscape} alt={modalimage?.alt} />
        <div className="btns">
          <div className="download">
            <i className="fa-solid fa-arrow-down"></i>
            <ul>
              <li>Select Size</li>
              <li onClick={() => downloadModalimage(modalimage?.src?.original)}>
                <strong>Original :</strong>
                5328x4000
                <i className="fa-solid fa-down-long"></i>
              </li>
              <li onClick={() => downloadModalimage(modalimage?.src?.large)}>
                <strong>Large :</strong>
                1920x1441
                <i className="fa-solid fa-down-long"></i>
              </li>
              <li onClick={() => downloadModalimage(modalimage?.src?.medium)}>
                <strong>Medium :</strong>
                1280x961
                <i className="fa-solid fa-down-long"></i>
              </li>
              <li onClick={() => downloadModalimage(modalimage?.src?.small)}>
                <strong>Small :</strong>
                640x480
                <i className="fa-solid fa-down-long"></i>
              </li>
            </ul>
          </div>
          <i className="fa fa-close" onClick={() => setModal(!modal)}></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
