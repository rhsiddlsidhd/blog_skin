import styled from "styled-components";
import Icon from "../components/atoms/Icon";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logos>
          <Icon
            $width="50px"
            $aspectRatio="1/1"
            $margin="0 1rem 0 0 "
            name="아이콘"
            $borderRadius="50%"
          />
          <div>타이틀</div>
        </Logos>
        <Icons>
          <Icon $width="50px" name="검색" />
          <Icon $width="50px" name="햄버거" />
        </Icons>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;
const Container = styled.header`
  position: fixed;
  width: 100%;
  padding: 2rem 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 1;
  background-color: white;
`;

const Wrapper = styled.section`
  width: 80%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
`;
