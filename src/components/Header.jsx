import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Title>Novidade no atacado</Title>
      <SubTitle>
        Criamos uma parceria para vender online na Inventa com condições
        especiais
      </SubTitle>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-area: Header;
  background: linear-gradient(to top, #20002c, #cbb4d4);
  color: #fff;
  text-align: center;
  height: 150px;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
  padding: 0;
  margin: 0;
`;
const SubTitle = styled.p`
  padding: 0;
  margin: 0;
  color: #ccc;
`;
