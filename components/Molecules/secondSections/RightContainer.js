import styled from "styled-components";
import Graph from "../../Atoms/Graph";
import * as FadeIn from "../../utils/Fade_in";

const Li = styled.li`
  margin-bottom: 15px;
  list-style: none;
`;

const Container = styled.div`
  width: 45%;
`;

const Index = () => {
  return (
    <Container>
      <ul>
        <FadeIn.Right>
          <Li>
            <Graph text="javascript" memori="85" />
          </Li>
        </FadeIn.Right>

        <FadeIn.Right>
          <Li>
            <Graph text="React/Redux" memori="80" />
          </Li>
        </FadeIn.Right>

        <FadeIn.Right>
          <Li>
            <Graph text="Next.js" memori="75" />
          </Li>
        </FadeIn.Right>

        <FadeIn.Right>
          <Li>
            <Graph text="Node.js/Express.js" memori="65" />
          </Li>
        </FadeIn.Right>
      </ul>
    </Container>
  );
};

export default Index;
