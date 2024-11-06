import styled from "styled-components";

interface ContainerProps {
  $fullHeight?: boolean;
}

export const Container = styled.section<ContainerProps>`
  height: ${({ $fullHeight }) => ($fullHeight ? "100vh" : "auto")};
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
