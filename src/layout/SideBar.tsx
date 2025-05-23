import { styled } from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <FixedContainer>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </FixedContainer>
    </Container>
  );
};

export default SideBar;

const Container = styled.section`
  flex: 1 0 25%;
  height: 100%;
  position: relative;
`;

const FixedContainer = styled.div`
  position: sticky;
  top: 12rem;
  border: 3px solid #dddddd;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
`;
