import styled from "styled-components";
import NavItem from "./NavItem";

const Box = styled.div({
  position: "fixed",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
});

const Index = () => {
  return (
    <Box>
      <NavItem text="BLOG" />
      <NavItem text="ABOUT" />
      <NavItem text="SKILS" />
      <NavItem text="PORTFOLIO" />
    </Box>
  );
};

export default Index;
