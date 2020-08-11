import styled, { css } from "styled-components";

const Span = styled.span`
  background-color: #474545;
  height: 10px;
  width: 80px;
  opacity: 0.7;
  margin-bottom: 10px;
  display: inline-block;
  border-radius: 4px;
  transition: all 0.4s;
  ${(props) => {
    return props.flag
      ? css`
          opacity: 0;
        `
      : ``;
  }}
`;

const Index = (props) => {
  return <Span flag={props.flag}></Span>;
};

export default Index;
