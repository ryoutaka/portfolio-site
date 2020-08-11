import styled from "styled-components";
import HamburgerStick from "../../Atoms/hamburger/HamburgerStick";
import HamburgerBottom from "../../Atoms/hamburger/HamburgerBottom";
import HamburgerTop from "../../Atoms/hamburger/HamburgerTop";

import { useRef, useState } from "react";

const Container = styled.div`
  width: 50px;
  height: 50px;
`;

const Input = styled.input.attrs((props) => ({
  ref: props.ref,
  type: "checkbox",
}))`
  display: none;
`;

const Index = () => {
  const [flag, setFlag] = useState(false);

  const click = () => {
    setFlag(!flag);
  };
  return (
    <Container onClick={() => click()}>
      <HamburgerTop flag={flag} />

      <HamburgerStick flag={flag} />

      <HamburgerBottom flag={flag} />
    </Container>
  );
};

export default Index;
