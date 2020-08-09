import styled, { keyframes, extend } from "styled-components";
import SectionTitle from "../Atoms/SectionTitle";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: blue;
`;

const Index = () => {
  return (
    <div>
      <SectionTitle direction="-20px" text="Hello" size={"5em"} />
      <SectionTitle
        direction="20px"
        text="Welcome to Ryo's portfolio site"
        size={"4em"}
      />
    </div>
  );
};

export default Index;
