import styled from "styled-components";
import Paragraph from "../../Atoms/Paragraph";
import * as FadeIn from "../../utils/Fade_in";

const Container = styled.div`
  width: 45%;
`;

const Index = () => {
  return (
    <Container>
      <div>
        <FadeIn.Left key="1">
          <Paragraph size="1.5em">
            こんにちは！私の名前は高谷　遼です！
          </Paragraph>
        </FadeIn.Left>
      </div>

      <div>
        <FadeIn.Left key="2">
          <Paragraph>
            ReactとNext.jsが大好きなフロントエンドよりのソフトウェアエンジニアです！
            <br />
            JavaScriptを軸にフロントエンドからバックエンドまで実装できます。
          </Paragraph>
        </FadeIn.Left>
      </div>
      <div>
        <FadeIn.Left key="3">
          <Paragraph>
            過去にバレエダンサーとして7年間様々な国で働いて、今はエンジニアとして働いてます！
          </Paragraph>
        </FadeIn.Left>
      </div>
      <div>
        <FadeIn.Left key="4">
          {" "}
          <Paragraph>興味のある方は是非コンタクトください！</Paragraph>
        </FadeIn.Left>
      </div>
    </Container>
  );
};

export default Index;