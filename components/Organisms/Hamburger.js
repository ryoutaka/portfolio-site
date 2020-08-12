import styled from "styled-components";
import Box from "../Molecules/hamburger/Box";
import Content from "../Molecules/hamburger/Content";
import { useState } from "react";

const Header = styled.div`
  position: fixed;
  padding-top: 15px;
  padding-left: 15px;
  z-index: 5;
  width: 100%;
`;

const Index = () => {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <Header>
        <Box flag={flag} setFlag={setFlag} />
        <Content flag={flag} setFlag={setFlag} />
      </Header>
    </>
  );
};

export default Index;
