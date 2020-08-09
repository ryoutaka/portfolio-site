import styled from "styled-components";

const P = styled.p`
  font-family: "Vollkorn", serif;
  font-size: 1.2em;
  line-height: 1.5em;
  margin-bottom: 18px;
`;

const Index = (props) => {
  return <P>{props.children}</P>;
};

export default Index;
