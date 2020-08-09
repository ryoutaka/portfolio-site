import styled from "styled-components";
import SectionTitleNon from "../Atoms/SectionTitleNon";
import RightContainer from "../Molecules/secondSections/RightContainer";
import LeftContainer from "../Molecules/secondSections/LeftContainer";
import * as FadeIn from "../utils/fadein";

const Container = styled.div`
  padding-top: 15vh;
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  margin-bottom: 90px;
`;
const Box = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  aligin-items: center;
`;

const Index = () => {
  return (
    <>
      <Container>
        <FadeIn.Down>
          <Title>
            <SectionTitleNon text="ABOUT" />
          </Title>
        </FadeIn.Down>

        <Box>
          <LeftContainer />

          <RightContainer />
        </Box>
      </Container>
    </>
  );
};

export default Index;
