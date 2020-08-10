import styled from "styled-components";
import NavBarRight from "../Molecules/NavBarRight";
import NavBarLogo from "../Atoms/NavBarLogo";

const Box = styled.div({
  backgroundColor: "#e0e0e0",
  opacity: "0.7",
  height: "15vh",
  position: "fixed",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  zIndex: 3,
});

const Index = () => {
  return (
    <Box>
      <NavBarLogo />
      <NavBarRight />
    </Box>
  );
};

export default Index;
