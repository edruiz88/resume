import { useState } from "react";

export default () => {
  const [modal, setModal] = useState(false);
  const [cntnt, setCntnt] = useState("I'm the Modal Content");

  const handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
        setCntnt(content);
    }
  };
  return { modal, handleModal, cntnt };
};
