import React from "react";
import "./style.scss";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, setIsOpen, children }: IProps) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`modal ${isOpen && "show"}`}
    >
      <div onClick={(e: any) => e.stopPropagation()} className="modal__content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
