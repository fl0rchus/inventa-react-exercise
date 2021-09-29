import React, { useState } from "react";
import styled from "styled-components";
import PopUp from "../components/PopUp";

const Home = () => {
  const [show] = useState(true);

  return <PopUp show={show} />;
};

export default Home;
