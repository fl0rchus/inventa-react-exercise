import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = ({ data }) => {
  return (
    <>
      <Circle>
        <img src={data.icon} alt={data.text} />
      </Circle>
      <Text>
        <strong>{data.bold}</strong>
        <br />
        {data.text}
      </Text>
    </>
  );
};

const Circles = ({ item }) => {
  return (
    <Container>
      {item.link ? (
        <Link to="/boleto">
          <Item data={item} />
        </Link>
      ) : (
        <>
          <Item data={item} />
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
  @media only screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;
const Text = styled.p`
  font-size: 15px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
