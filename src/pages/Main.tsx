import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <h1>content</h1>
    </Container>
  );
};

export default Main;

const Container = styled.section`
  max-width: 1080px;
  width: 80%;
  border: 1px solid black;
  height: 200vh;
  padding-top: 12rem;
  margin: 0 auto;
`;
