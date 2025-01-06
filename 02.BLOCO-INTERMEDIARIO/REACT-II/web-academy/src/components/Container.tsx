import styled from "styled-components";

interface ContainerProps {
  $fullHeight?: boolean;
  $flexDirection?: "column" | "row";
  $noPadding?: boolean;
}

export const Container = styled.section<ContainerProps>`
  height: ${({ $fullHeight }) => ($fullHeight ? "100vh" : "auto")};
  width: 100%;
  padding: ${({ $noPadding }) => ($noPadding ? "0" : "40px")};
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection ?? "column"};
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  h1 {
    font-size: 24px;
  }
`;
