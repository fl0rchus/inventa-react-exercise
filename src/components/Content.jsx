import React, { useEffect, useState } from "react";
import Circles from "./Circles";
import styled from "styled-components";

const ICON_CIRCLES = [
  {
    icon: "/src/assets/dollar-icon.svg",
    text: "no boleto",
    bold: "até 60 dias",
    link: true,
  },
  {
    icon: "/src/assets/truck-icon.svg",
    text: "acima de R$200",
    bold: "Frete grátis",
    link: false,
  },
];

const Content = () => {
  const [reverse, setReverse] = useState(false);
  const handleReverse = () => {
    setReverse(!reverse);
    ICON_CIRCLES.reverse();
  };

  return (
    <Container>
      <CirclesContainer>
        {ICON_CIRCLES.map((item, index) => (
          <Circles item={item} key={index} />
        ))}
      </CirclesContainer>
      <Information>
        <Divider />
        <Sub>APROVEITE A OPORTUNIDADE</Sub>
        <Text>
          30% de desconto no primeiro pedido para voce aproveitar essa novidade
        </Text>
        <Button onClick={handleReverse}>Compre agora</Button>
        <Caption>Pedido Minimo R$ 500</Caption>
      </Information>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  @media only screen and (max-width: 1025px) {
    padding: 20px;
  }
`;
const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 100%;
  @media only screen and (max-width: 1025px) {
    justify-content: center;
    gap: 100px;
  }
  @media only screen and (max-width: 768px) {
    gap: 0;
    flex-direction: column;
  }
`;
const Information = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;
const Divider = styled.hr`
  width: 30%;
  border: 1px solid #eee;
`;
const Sub = styled.p`
  font-size: 14px;
  color: #ccc;
  letter-spacing: 1px;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 1025px) {
    font-size: 10px;
  }
`;
const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  padding: 0;
  margin: 15px;
  @media only screen and (max-width: 1025px) {
    font-size: 15px;
  }
`;
const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  border: 2px solid #000;
  margin-bottom: 5px;
  &:hover {
    color: #000;
    background-color: #fff;
    transition: 300ms ease-in-out;
  }
  @media only screen and (max-width: 1025px) {
    font-size: 15px;
  }
`;
const Caption = styled.small`
  font-weight: 500;
  color: #bab7b7;
  @media only screen and (max-width: 1025px) {
    font-size: 12px;
  }
`;
