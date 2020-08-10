import styled from "styled-components";
import NavItem from "../Atoms/NavItem";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  &:last-child {
    margin-right: 8%;
  }
`;

const A = styled.a`
  text-decoration: none;
`;

const Index = () => {
  return (
    <Container>
      <Link href="#second">
        <A>
          <NavItem text="ABOUT" />
        </A>
      </Link>
      <Link href="#portfolio">
        <A>
          <NavItem text="PORTFOLIO" />
        </A>
      </Link>
    </Container>
  );
};

export default Index;
