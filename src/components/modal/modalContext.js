import React, { createContext } from "react";
import useModall from "./useModal";
import Modal from "./modal";

// let ModalContext;
const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const { modal, handleModal, cntnt } = useModall();
  return (
    <ModalContext.Provider value={{ modal, handleModal, cntnt }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };