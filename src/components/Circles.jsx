import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Circles = ({ item }) => {
  return (
    <Container>
      {item.link ? (
        <Link to="/boleto">
          <Circle>
            <img src={item.icon} alt={item.text} />
          </Circle>
          <strong>{item.text}</strong>
        </Link>
      ) : (
        <>
          <Circle>
            <img src={item.icon} alt={item.text} />
          </Circle>
          <strong>{item.text}</strong>
        </>
      )}
    </Container>
  );
};

export default Circles;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #656566;
  a {
    text-decoration: none;
    color: #656566;
  }
`;
const Circle = styled.div`
  height: 100px;
  width: 100px;
  background-color: #eceff1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  img {
    width: 50%;
  }
`;
