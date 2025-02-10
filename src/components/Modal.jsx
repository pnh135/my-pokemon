import React from "react";
import { Children } from "react";
import { reactDOM } from "react-dom";

const Modal = ({ Children, onClose }) => {
  return reactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        {Children}
        <button onClick={onClose}>&&</button>
      </div>
    </div>
  );
};

export default Modal;
