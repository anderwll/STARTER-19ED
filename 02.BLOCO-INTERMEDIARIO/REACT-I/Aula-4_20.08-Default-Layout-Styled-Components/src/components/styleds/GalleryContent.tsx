import styled from "styled-components";

export const GalleryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 20px;
  gap: 14px;

  img {
    width: 100%;
    height: auto;

    &:hover {
      scale: 1.02;
      transition: all 0.4s;
      cursor: pointer;
      border-radius: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
