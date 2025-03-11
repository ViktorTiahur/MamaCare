import React, { ReactNode } from "react";
import "./Modal.module.scss";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
