import styled, { css } from "styled-components";
import HamburgerStick from "../../Atoms/hamburger/HamburgerStick";
import HamburgerBottom from "../../Atoms/hamburger/HamburgerBottom";
import HamburgerTop from "../../Atoms/hamburger/HamburgerTop";

const Container = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  ${(props) => {
    return props.flag
      ? css`
          z-index: 90;
        `
      : "";
  }}
`;

const Index = ({ flag, setFlag }) => {
  const changeFlag = () => {
    setFlag(!flag);
  };
  return (
    <Container flag={flag} onClick={() => changeFlag()}>
      <HamburgerTop flag={flag} />

      <HamburgerStick flag={flag} />

      <HamburgerBottom flag={flag} />
    </Container>
  );
};

export default Index;
