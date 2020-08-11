import styled from "styled-components";
import Box from "../Molecules/hamburger/Box";

const Header = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 5;
`;

const Index = () => {
  return (
    <>
      <Header>
        <Box />
      </Header>
    </>
  );
};

export default Index;
