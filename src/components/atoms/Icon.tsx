import { styled } from "styled-components";

interface IconProps {
  $width?: string;
  $height?: string;
  $aspectRatio?: string;
  $borderRadius?: string;
  $margin?: string;
  name?: string;
  src?: string;
}

type IconWrapperProps = Omit<IconProps, "name" | "src">;

const Icon = ({ name, src, ...props }: IconProps) => {
  return (
    <Wrapper {...props}>
      <img src={src} alt={name} style={{ borderRadius: props.$borderRadius }} />
    </Wrapper>
  );
};

export default Icon;

const Wrapper = styled.div<IconWrapperProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  margin: ${({ $margin }) => $margin};
  border: 1px solid black;
`;
