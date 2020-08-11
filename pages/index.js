import Navbar from "../components/Organisms/Navbar";
import TopContent from "../components/Organisms/TopContent";
import SecondSection from "../components/Organisms/SecondSection";
import ThirdSection from "../components/Organisms/ThirdSection";
import { UAParser } from "ua-parser-js";
import Media from "react-media";
import Hamburger from "../components/Organisms/Hamburger";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

export function getServerSideProps({ req }) {
  const uaParser = new UAParser(req.headers["user-agent"]);
  const isSp = uaParser.getDevice().type !== undefined ? "mobile" : "desktop";

  return {
    props: {
      device: isSp,
    },
  };
}

export default function Home(props) {
  const { device } = props;

  return (
    <>
      <Container>
        <Media
          queries={{ medium: "(max-width: 599px)" }}
          defaultMatches={{ medium: props.device === "mobile" }}
          render={() => (
            <>
              <Hamburger />
            </>
          )}
        />
        <Media
          queries={{ medium: "(min-width: 600px)" }}
          defaultMatches={{ medium: props.device === "desktop" }}
          render={() => (
            <>
              <Navbar />
            </>
          )}
        />

        <TopContent divice={device} />
        <SecondSection />
        <ThirdSection />
      </Container>
    </>
  );
}
