import React from "react";
import "./Modal.css";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  // console.log(isModalOpen, setIsModalOpen);
  return (
    <div id="modal">
      <div id="modal-body">
        <button id="modal-close" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
