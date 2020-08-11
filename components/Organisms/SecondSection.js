import styled from "styled-components";
import SectionTitleNon from "../Atoms/SectionTitleNon";
import RightContainer from "../Molecules/secondSections/RightContainer";
import LeftContainer from "../Molecules/secondSections/LeftContainer";
import * as FadeIn from "../utils/Fade_in";
import media from "styled-media-query";

const Container = styled.div`
  padding-top: 15vh;
  width: 100%;
`;

const Title = styled.div`
  margin-bottom: 90px;
  ${media.lessThan("599px")`
  margin-bottom: 40px;
  
`}
`;
const Box = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  aligin-items: center;
  ${media.lessThan("599px")`
  display: block;
  
`}
`;

const Index = () => {
  return (
    <>
      <Container id="second">
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
