import styled from "styled-components";

const Image = styled.img.attrs((props) => ({
  src: `/images/${props.url}`,
}))`
  dislay: box;
  width: 300px;
  height: 200px;
  object-fit: contain;
  transition-duration: 1s;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    !props.flag
      ? `display:none
    transform: translateY(100px);
    `
      : ""}
`;

const Div = styled.div``;

const Description = styled.div`
  width: 300px;
  height: 200px;
  opacity: 0;
  display: flex;
  font-family: "Vollkorn", serif;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  font-size: ${(props) => props.size || "1em"};
`;

const ImageContainer = styled.div`
  & ${Div}:hover + ${Description} {
    opacity: 0.8;
    background: #3b3a3a;
    color: #ffffff;
    cursor: pointer;
    transform: translateY(-200px);
  }
`;

// const Description = styled.div`
//   width: 300px;
//   height: 200px;
//   opacity: 0;
//   display: flex;
//   font-family: "Vollkorn", serif;
//   justify-content: center;
//   align-items: center;
//   transition-duration: 0.5s;
//   ${ImageContainer}:hover & {
//     opacity: 0.8;
//     background: #3b3a3a;
//     color: #ffffff;
//     cursor: pointer;
//     transform: translateY(-200px);

//     font-size: ${(props) => props.size || "1em"};
//   }
// `;
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
