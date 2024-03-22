import React, { useEffect } from "react";
import styled from "styled-components";

interface Props {
  data: string | string[];
  imageRatio?: number;
  gridCount?: number;
  brand?: any;
  name?: any;
  onImageClick?: (imageUrl: string) => void; // 클릭 시 이미지 URL 전달하는 콜백 함수
}

const ImageGrid = ({ data, imageRatio = 1, gridCount = 5, brand, name, onImageClick }: Props) => {
  // 이미지를 클릭했을 때의 핸들러 함수
  const handleImageClick = (imageUrl: string) => {
    if (onImageClick) {
      onImageClick(imageUrl);
    }
  };

  useEffect(() => {
    // 이미지 박스에 순차적으로 애니메이션용 클래스명 추가
    const addFadeInAnimation = () => {
      const imgBoxes = document.querySelectorAll('.imgbox');
      imgBoxes.forEach((imgBox, index) => {
        setTimeout(() => {
          imgBox.classList.add('fade-in');
        }, index * 100); // 각 이미지 박스마다 애니
      });
    };

    addFadeInAnimation();

    // cleanup 함수
    return () => {
      const imgBoxes = document.querySelectorAll('.imgbox');
      imgBoxes.forEach(imgBox => {
        imgBox.classList.remove('fade-in');
      });
    };
  }, []); 

  return (
    <Container className="img_container" gridCount={gridCount}>
      {typeof data === "string" ? (
        <ImageBox className="imgbox" imageRatio={imageRatio} onClick={() => handleImageClick(data)}>
          <img src={data} alt="image" />
          <h2>{name}</h2>
          <p>{brand}</p>
        </ImageBox>
      ) : (
        data.map((x: string, i: number) => (
          <ImageBox className="imgbox" key={i} imageRatio={imageRatio} onClick={() => handleImageClick(x)}>
            <div className="content">
              <img className="img" src={x} alt="" />
            </div>
            <div className="info">
              <p className="brand">{brand[i]}</p>
              <h2 className="name">{name[i]}</h2>
            </div>
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
  margin: 50px 0px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageBox = styled.div<{ imageRatio: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: ${(props) => props.imageRatio};
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.5s ease; 
  &.fade-in {
    opacity: 1;   
  }
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1;
  }
`;

export default ImageGrid;