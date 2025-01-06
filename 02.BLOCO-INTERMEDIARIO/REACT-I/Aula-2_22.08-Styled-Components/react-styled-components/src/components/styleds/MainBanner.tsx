import styled from "styled-components";
import image4 from "../../assets/image-4.jpg";

export const MainBanner = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 18px;

  /* Se a imagem estiver me /public */
  /* background: url(/image-1.jpg); */

  background: ${`url(${image4})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  p {
    color: #ffff;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
