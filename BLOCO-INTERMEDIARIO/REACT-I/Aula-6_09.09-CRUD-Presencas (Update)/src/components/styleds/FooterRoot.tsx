import styled from 'styled-components';

export const FooterRoot = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;

  nav {
    display: flex;
    gap: 16px;

    img {
      width: 24px;
      cursor: pointer;
      border-radius: 40%;
      filter: ${(props) => (props.theme.textColor === '#ffff' ? 'invert(100%)' : 'invert(0)')};

      &:hover {
        scale: 1.1;
        transition: all 0.2s;
      }
    }
  }
`;
