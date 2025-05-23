import styled from "styled-components";
import SideBar from "../layout/SideBar";
import Thumnail from "../components/atoms/Thumnail";

const Main = () => {
  return (
    <Container>
      <div style={{ height: "150px" }}>1</div>
      <ContentWrapper>
        <SideBar />
        <Content>
          <h1 style={{ marginTop: 0 }}>최근글</h1>
          <div className="items">
            {Array.from({ length: 10 }, (_, i) => {
              return <Thumnail key={i} />;
            })}
          </div>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Main;

const Container = styled.section`
  width: 80%;
  max-width: 1280px;
  padding-top: 12rem;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 200vh;
`;

const Content = styled.div`
  flex: 3 0 75%;
  border: 3px solid #dddddd;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 1rem;
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-left: 1rem;
  }
`;
