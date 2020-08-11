import Navbar from "../components/Organisms/Navbar";
import TopContent from "../components/Organisms/TopContent";
import SecondSection from "../components/Organisms/SecondSection";
import ThirdSection from "../components/Organisms/ThirdSection";
import { UAParser } from "ua-parser-js";
import Media from "react-media";

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
      <Media
        queries={{ medium: "(min-width: 600px)" }}
        defaultMatches={{ medium: props.device === "desktop" }}
        render={() => (
          <>
            <Navbar device={device} />
          </>
        )}
      />

      <TopContent divice={device} />
      <SecondSection />
      <ThirdSection />
    </>
  );
}
