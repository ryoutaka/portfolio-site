import styled, { keyframes } from "styled-components";

const transform = (memori) => {
  return keyframes`
  0% {
    opacity: 0;
    width:0%;
    
  }
  100% {
    opacity: 1;
    width:${memori}%;
  }
  `;
};

const Container = styled.div`
  width: 27rem;
  background: #d7d9d8;
`;

const Content = styled.div`
  background-color: #97f0e7;
  height: 40px;
  animation-name: ${(props) => transform(props.memori)};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;

const Text = styled.p`
  font-family: "Vollkorn", serif;
  font-size: 2em;
  margin-bottom: 10px;
`;

const Index = (props) => {
  return (
    <>
      <Text>{props.text}</Text>
      <Container>
        <Content memori={props.memori} />
      </Container>
    </>
  );
};

export default Index;
