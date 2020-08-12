import styled, { css } from "styled-components";
import Link from "next/link";

const BigBox = styled.div`
  position: relative;
`;

const Under = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  color: white;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const A = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 30px;
`;

const Container = styled.div`
  height: 100vh;
  width: 80%;
  display: flex;
  background-color: #474545;
  opacity: 0.7;
  position: absolute;
  top: -65px;
  left: -15px;
  z-index: 6;
  transform: translateX(-105%);
  transition: all 0.4s;
  ${(props) =>
    props.flag
      ? css`
          transform: translateX(0%);
        `
      : ""}
`;

const Index = ({ flag, setFlag }) => {
  return (
    <BigBox>
      <Container flag={flag}>
        <Under>
          <Link href="#second">
            <A>ABOUT</A>
          </Link>
          <Link href="#portfolio">
            <A>PORTFOLIO</A>
          </Link>
        </Under>
      </Container>
    </BigBox>
  );
};

export default Index;
