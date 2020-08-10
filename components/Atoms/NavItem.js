import Link from "next/link";
import styled from "styled-components";

const Box = styled.div({
  fontSize: "1.5em",
  padding: "1.5em",
  fontFamily: "'Vollkorn', serif;",
  cursor: "pointer",
});

const Index = (props) => {
  return <Box>{props.text}</Box>;
};

export default Index;
