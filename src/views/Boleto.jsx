import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Boleto = () => {
  return (
    <Container>
      <Link to="/">Go Back</Link>
      <Title>Compre na Inventa</Title>
    </Container>
  );
};

export default Boleto;

const Container = styled.div`
  padding: 20px;
  a {
    text-decoration: none;
    color: #7d7d7d;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  text-align: center;
`;
