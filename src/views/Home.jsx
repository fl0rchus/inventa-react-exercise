import React from "react";
import styled from "styled-components";
import PopUp from "../components/PopUp";

const Home = () => {
  return (
    <Main>
      <PopUp />
    </Main>
  );
};

export default Home;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "PopUp";
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;
