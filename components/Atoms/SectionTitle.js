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
  padding: 20px;
  font-family: "Vollkorn", serif;
  animation-name: ${(props) => func(props.direction)};
  animation-duration: 2s;
`;

const Index = (props) => {
  return (
    <>
      <H2 direction={props.direction} size={props.size}>
        {props.text}
      </H2>
    </>
  );
};

export default Index;
