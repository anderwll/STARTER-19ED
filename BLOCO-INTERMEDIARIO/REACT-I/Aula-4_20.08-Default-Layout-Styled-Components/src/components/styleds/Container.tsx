import styled from 'styled-components';

interface ContainerProps {
  flexDirection?: 'row' | 'column';
  notPadding?: boolean;
  gap?: string;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? 'row'};
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: ${(props) => props.gap ?? 0};
  width: 100%;
  height: auto;
  margin: auto;
  padding: ${(props) => (props.notPadding ? '0' : '70px 0')};

  max-width: 1444px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
