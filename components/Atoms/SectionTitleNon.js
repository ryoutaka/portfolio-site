import styled from "styled-components";


const H2 = styled.h2`
  text-align: center;
  font-size: ${(props) => (props.size ? props.size : "2em")};
  padding: 20px;
  font-family: "Vollkorn", serif;
`;

const Index = (props) => {
  return (
    <>
      <H2  size={props.size}>
        {props.text}
      </H2>
    </>
  );
};

export default Index;
