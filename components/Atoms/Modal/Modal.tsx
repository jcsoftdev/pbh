
import React, { useState, useEffect } from "react";
import reactDOM from "react-dom";

import { CSSTransition } from "react-transition-group";

import Backdrop from "../Backdrop";
import Button from "../Button";

const ModalOverLay = (props) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    try {
      
      if (props.buttonOn) {
        props.setButtonOn(false);
      } else {
        props.setButtonOn(true);
      }
    } catch (error) {
      
    }
    
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.showButton]);
  useEffect(() => {
    setSuccess(props.success);
    setError(props.error);
    return () => {};
  }, [props.success, props.error]);

  const content = (
    <div
      className={`modal_container ${props.className} ${
        props.buttonOn ? "f-end" : "f-center"
      }`}
    >
      <div className={`modal `} style={props.style}>
        <header className={`modal__header ${props.headerClass}`}>
          {props.header}
        </header>
        <form
          onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
        >
          <CSSTransition
            in={props.showContent}
            timeout={300}
            classNames="content"
            onEnter={() => props.setButtonOn(false)}
            onExited={() => props.setButtonOn(true)}
          >
            <div className={`modal__content ${props.contentClass}`}>
              {props.children}
            </div>
          </CSSTransition>
        </form>
        <footer className={`modal__footer ${props.footerClass}`}>
          {success ? (
            <span style={{ color: "green" }}>{props.footer}</span>
          ) : error ? (
            <span style={{ color: "red" }}>{props.footer}</span>
          ) : (
            <span>{`${props.footer || ""}`}</span>
          )}
          {props.footerContent}
          {console.log(props.showButton, props.buttonOn)}
          {props.showButton ? (
            props.buttonOn ? (
              <Button size="small" onClick={() => props.setShowContent(true)}>
                ⬆ Subir
              </Button>
            ) : (
              <Button size="small" onClick={() => props.setShowContent(false)}>
                ⬇ Bajar
              </Button>
            )
          ) : (
            props.footerRightMessage
          )}
        </footer>
      </div>
    </div>
  );
  return reactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  const [showContent, setShowContent] = useState(true);
  const myProps = {
    ...props,
    showContent: showContent,
    setShowContent: setShowContent,
  };
  return (
    <>
      {props.backdrop && <Backdrop onClick={props.onCancel || null} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        appear={true}
        timeout={800}
        classNames="fade"
      >
        <ModalOverLay {...myProps} />
      </CSSTransition>
    </>
  );
};

export default Modal;
