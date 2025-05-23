import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logos>
          <div>
            <img></img>
          </div>
          <div>타이틀</div>
        </Logos>
        <Search>
          <img alt="이미지" src="#"></img>
        </Search>
      </Wrapper>
    </Container>
  );
};

export default Header;
const Container = styled.header`
  position: fixed;
  width: 100%;
  padding: 2rem 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Wrapper = styled.section`
  width: 80%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  & > div:first-child {
    margin: 0 1rem;
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 1px solid black;
  }
`;

const Search = styled.div`
  width: 50px;
  border: 1px solid black;
`;
