import styled from "styled-components";
import NavBarRight from "./NavBarRight";
import NavBarLogo from "./NavBarLogo";

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
