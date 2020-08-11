import styled from "styled-components";
import media from "styled-media-query";

const Image = styled.img.attrs((props) => ({
  src: `/images/${props.url}`,
}))`
  margin: 0 auto;

  width: 300px;
  height: 250px;
  object-fit: contain;
  transition-duration: 1s;
  &:hover {
    cursor: pointer;
  }
  ${media.lessThan("599px")`
  width: 250px;
  height: 200px;
`}
`;

const Div = styled.div`
  margin: 0 auto;

  width: 300px;
  height: 250px;
  ${media.lessThan("599px")`
  width: 250px;
  height: 200px;
`}
`;

const Description = styled.div`
  width: 300px;
  height: 250px;
  opacity: 0;
  margin: 0 auto;
  display: flex;
  font-family: "Vollkorn", serif;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  font-size: ${(props) => props.size || "1em"};
  ${media.lessThan("599px")`
  width: 250px;
  height: 200px;
`}
`;

const ImageContainer = styled.div`
  & ${Div}:hover + ${Description} {
    opacity: 0.8;
    background: #3b3a3a;
    color: #ffffff;
    cursor: pointer;
    transform: translateY(-250px);
    ${media.lessThan("599px")`
    transform: translateY(-200px);
`}
    
`;

const Index = (props) => {
  const { flag, setFlag } = props;

  const changeFlag = () => {
    setFlag(false);
  };
  return (
    <>
      <ImageContainer size={props.size}>
        <Div>
          <Image onClick={changeFlag} flag={flag} url={props.url} />
        </Div>

        <Description size={props.size}>{props.title}</Description>
      </ImageContainer>
    </>
  );
};

export default Index;
