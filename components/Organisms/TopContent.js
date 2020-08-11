import styled from "styled-components";
import TopComponentTitle from "../Molecules/TopComponentTitle";
import media from "styled-media-query";

const Content = styled.section`
  padding-top: 15vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.lessThan("599px")`
  height: 80vh;
  
`}
`;

export default function TopComponent(props) {
  return (
    <Content>
      <TopComponentTitle device={props.device} />
    </Content>
  );
}
