import React, { useEffect, useState } from "react";
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
      <div style={{maxHeight: "400px", overflowY: "auto"}}>
       {children} 
      </div>
      </Content>
      </Container>
    </CSSTransition>
  );
}

Modal.defaultProps = {
  title: ""
}

 