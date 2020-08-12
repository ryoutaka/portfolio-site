import styled, { css } from "styled-components";

const Span = styled.span`
  background-color: #474545;
  opacity: 0.7;
  height: 10px;
  width: 70px;
  margin-bottom: 10px;
  display: inline-block;
  border-radius: 4px;
  transition: all 0.4s;
  ${(props) => {
    return props.flag
      ? css`
          background-color: black;
          -webkit-transform: translateY(-20px) rotate(315deg);
          transform: translateY(-20px) rotate(315deg);
        `
      : ``;
  }}
`;

const Index = (props) => {
  return <Span flag={props.flag}></Span>;
};

export default Index;
