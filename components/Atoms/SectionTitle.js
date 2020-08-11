import styled, { keyframes } from "styled-components";

const func = (direction) => {
  return keyframes`
  0% {
    opacity: 0;
    transform:translateY(${direction});
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  `;
};

const H2 = styled.h2`
  text-align: center;
  font-size: ${(props) => (props.size ? props.size : "2em")};
  margin-bottom: ${(props) => (props.bottom ? props.bottom : "0px")};
  padding: 20px;
  line-height: ${(props) => (props.line ? props.line : "0px")};
  font-family: "Vollkorn", serif;
  animation-name: ${(props) => func(props.direction)};
  animation-duration: 2s;
`;

const Index = (props) => {
  console.log(props.bottom);
  return (
    <>
      <H2
        line={props.line}
        bottom={props.bottom}
        direction={props.direction}
        size={props.size}
      >
        {props.text}
      </H2>
    </>
  );
};

export default Index;
