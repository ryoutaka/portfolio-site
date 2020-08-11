import styled from "styled-components";
import Image from "../Atoms/Image";
import * as FadeIn from "../utils/Fade_in";
import media from "styled-media-query";

const Container = styled.div`
  margin: 0 auto;
  display: felx;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan("599px")`
  display: block;
  
`}
`;

const Index = (props) => {
  const { flag, setFlag } = props;
  return (
    <>
      <Container>
        <FadeIn.Left>
          <Image
            flag={flag}
            setFlag={setFlag}
            title="らくたび"
            size="2em"
            url="rakutabi.png"
          />
        </FadeIn.Left>

        <FadeIn.Down>
          <Image
            flag={flag}
            setFlag={setFlag}
            title="Short Play spotify"
            url="spotify.png"
            size="1.8em"
          />
        </FadeIn.Down>

        <FadeIn.Right>
          <Image
            flag={flag}
            setFlag={setFlag}
            title="Ballet Characters API"
            size="1.5em"
            url="character.png"
          />
        </FadeIn.Right>
      </Container>
    </>
  );
};

export default Index;
