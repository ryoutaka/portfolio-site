import styled from "styled-components";
import TopComponentTitle from "../Molecules/TopComponentTitle";

const Content = styled.section({
  paddingTop: "15vh",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function TopComponent() {
  return (
    <Content>
      <TopComponentTitle />
    </Content>
  );
}
