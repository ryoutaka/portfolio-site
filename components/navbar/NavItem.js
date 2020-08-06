import Link from "next/link";
import styled from "styled-components";

const Box = styled.div({
  fontSize: "1em",
  padding: "0.5em",
  fontFamily: "'Vollkorn', serif;",
});

const Index = (props) => {
  return <Box>{props.text}</Box>;
};

export default Index;
