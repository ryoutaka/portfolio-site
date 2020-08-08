import styled from "styled-components";
import NavBarRight from "../Molecules/NavBarRight";
import NavBarLogo from "../Atoms/NavBarLogo";

const Box = styled.div({
  position: "fixed",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
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
