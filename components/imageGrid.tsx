import { COLORS } from "@/constants/constants";
import styled from "styled-components";

interface Props {
  data: string | string[];
  imageRatio?: number;
  gridCount?: number;
}

const ImageGrid = ({ data, imageRatio = 1, gridCount = 5 }: Props) => {
  return (
    <Container gridCount={gridCount}>
      {typeof data === "string" ? (
        <ImageBox imageRatio={imageRatio}>
          <img src={data} />
        </ImageBox>
      ) : (
        data.map((x: string, i: number) => (
          <ImageBox key={i} imageRatio={imageRatio}>
            <img src={x} />
          </ImageBox>
        ))
      )}
    </Container>
  );
};

const Container = styled.div<{ gridCount: number }>`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridCount}, 1fr);
  gap: 24px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageBox = styled.div<{ imageRatio: number }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${(props) => props.imageRatio};
  background-color: ${COLORS.gray1};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImageGrid;
