import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import { Container, Content, WrapperButtonClose, Close, Title } from "./styles";

export function Modal({ children, openModal, onClose, title }) {
  const [showMessage, setShowMessage] = useState();

  useEffect(() => {
    setShowMessage(openModal);
  }, [openModal]);

  function handleCloseModal() {
    setShowMessage(false);
    onClose();
  }

 return (
  <CSSTransition in={showMessage} timeout={300} unmountOnExit classNames="alert">
   <Container>
    <Content>
     <WrapperButtonClose>
      <Title>{title}</Title>
      <Close onClick={handleCloseModal}>X</Close>
      </WrapperButtonClose>
      {children} 
        
        </Content>
     
      </Container>
    </CSSTransition>
  );
}

Modal.defaultProps = {
  title: ""
}

export default function Modalportal({ children, ...props }) {
  return ReactDOM.createPortal(
    <Modal {...props}>{children}</Modal>,
    document.getElementById("modal-root")
  );
}
