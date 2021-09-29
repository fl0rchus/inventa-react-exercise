import React, { useEffect, useState } from "react";
import Circles from "./Circles";
import styled from "styled-components";

const ICON_CIRCLES = [
  {
    icon: "/src/assets/dollar-icon.svg",
    text: `até 60 dias no boleto`,
    link: true,
  },
  {
    icon: "/src/assets/truck-icon.svg",
    text: `Frete grátis acima de R$200`,
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 0px 0px;
  grid-template-areas:
    "Circles"
    "Information";
  grid-area: Body;
  padding: 50px;
`;
const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;
const Information = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: Information;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  padding: 0;
  margin: 15px;
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
`;
const Caption = styled.small`
  font-weight: 500;
  color: #bab7b7;
`;
