/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { XCircle } from "@phosphor-icons/react";

export const Modal = ({ isModalOpened, src, alt, onClick }) => {
  const modalDiv = document.querySelector("#modal");

  if (!isModalOpened) return null;

  const modal = (
    <div className="modal">
      <button
        type="button"
        id="modal-close"
        className="modal--button"
        onClick={onClick}
      >
        <XCircle size={40} weight="fill" color="#273c75" />
      </button>
      <div className="modal--image-container">
        <img src={src} alt={alt} border="0" loading="lazy" />
      </div>
    </div>
  );

  if (modalDiv) {
    return createPortal(
      <>
        <div className="modal--overlay" />
        {modal}
      </>,
      modalDiv
    );
  }
};
