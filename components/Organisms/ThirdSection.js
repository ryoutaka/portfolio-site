import { useState } from "react";
import styled from "styled-components";
import SectionTitleNon from "../Atoms/SectionTitleNon";
import Images from "../Molecules/Images";
const Container = styled.div`
  padding-top: 25vh;
  width: 100%;
  height: 100vh;
`;

const Index = () => {
  const [flag, setFlag] = useState(true);
  console.log(flag);

  return (
    <Container id="portfolio">
      <SectionTitleNon bottom="60px" text="PORTFOLIO" />
      <Images flag={flag} setFlag={setFlag} />

      {/* {flag ? <Images flag={flag} setFlag={setFlag} /> : "false"} */}
    </Container>
  );
};

export default Index;
