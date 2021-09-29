import React from "react";
import Header from "./Header";
import Content from "./Content";
import styled from "styled-components";

const PopUp = () => {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};

export default PopUp;

const Container = styled.div`
  background-color: #fff;
  width: 500px;
  border-bottom: 4px solid orange;
`;
