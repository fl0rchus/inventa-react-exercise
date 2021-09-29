import React from "react";
import Header from "./Header";
import Content from "./Content";
import styled, { keyframes } from "styled-components";
import { createPortal } from "react-dom";

let nodo = document.querySelector("#popup");

const PopUp = ({ show }) => {
  return show
    ? createPortal(
        <>
          <Container>
            <Header />
            <Content />
          </Container>
          <Background />
        </>,
        nodo
      )
    : null;
};

export default PopUp;

const animation = keyframes`
  0%{opacity: 0}
  100%{opacity: 1}
`;
const Container = styled.div`
  background-color: #fff;
  width: 40%;
  border-bottom: 4px solid orange;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  animation-name: ${animation};
  animation-duration: 2.5s;
  @media only screen and (max-width: 1300px) {
    width: 50%;
  }
  @media only screen and (max-width: 1025px) {
    width: 80%;
  }
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.4;
  overflow: hidden;
`;
