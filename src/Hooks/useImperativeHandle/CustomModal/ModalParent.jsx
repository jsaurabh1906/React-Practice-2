import React, { useRef } from "react";
import { topDivStyles } from "../../../tailwindStyles";
import CustomModal from "./CustomModal";

const ModalParent = () => {
  const modalRef = useRef(null);
  return (
    <div className={topDivStyles}>
      <h2>Custom Modal</h2>
      <CustomModal ref={modalRef} />
      <button onClick={() => modalRef.current.openModal()}>Open Modal</button>
      <button onClick={() => modalRef.current.closeModal()}>Close Modal</button>
    </div>
  );
};

export default ModalParent;
