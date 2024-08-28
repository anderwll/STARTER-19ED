import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  margin: auto;
  padding: 70px 0;

  max-width: 1444px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
