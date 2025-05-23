import { styled } from "styled-components";

interface ThumnailProps {
  name?: string;
}
const Thumnail = ({ ...props }: ThumnailProps) => {
  return (
    <Container id={props.name} className="anchor">
      Thumnail
    </Container>
  );
};

export default Thumnail;
const Container = styled.div`
  width: 250px;
  aspect-ratio: 16/9;
  border: 1px solid black;
  &:hover {
    background-color: gray;
    filter: blur(0.5);
  }
`;
