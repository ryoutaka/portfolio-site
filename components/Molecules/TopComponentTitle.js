import SectionTitle from "../Atoms/SectionTitle";
import Media from "react-media";

const Index = (props) => {
  return (
    <div>
      <Media
        queries={{ medium: "(max-width: 599px)" }}
        defaultMatches={{ medium: props.device === "mobile" }}
        render={() => (
          <>
            <SectionTitle
              bottom="50px"
              direction="-20px"
              text="Hello"
              size={"3em"}
            />
            <SectionTitle
              line="1.5em"
              direction="20px"
              text="Welcome to Ryo's portfolio site"
              size={"2.2em"}
            />
          </>
        )}
      />

      <Media
        queries={{ medium: "(min-width: 600px)" }}
        defaultMatches={{ medium: props.device === "desktop" }}
        render={() => (
          <>
            <SectionTitle
              bottom="100px"
              direction="-20px"
              text="Hello"
              size={"5em"}
            />
            <SectionTitle
              direction="20px"
              text="Welcome to Ryo's portfolio site"
              size={"4em"}
            />
          </>
        )}
      />
    </div>
  );
};

export default Index;
