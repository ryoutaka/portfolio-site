import styled from "styled-components";
import media from "styled-media-query";

const P = styled.p`
  font-family: "Vollkorn", serif;
  font-size: 1.2em;
  line-height: 1.5em;
  margin-bottom: 18px;
  ${media.lessThan("599px")`
  font-size: 0.8em;
`}
`;

const Index = (props) => {
  return <P>{props.children}</P>;
};

export default Index;
