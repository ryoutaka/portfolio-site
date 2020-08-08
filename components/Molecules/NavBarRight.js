import styled from "styled-components";
import NavItem from "../Atoms/NavItem";

const Container = styled.div({
  display: "flex",
  justifyContent: "space-around",
});

const Index = () => {
  return (
    <Container>
      <NavItem text="BLOG" />
      <NavItem text="ABOUT" />
      <NavItem text="SKILS" />
      <NavItem text="PORTFOLIO" />
    </Container>
  );
};

export default Index;
