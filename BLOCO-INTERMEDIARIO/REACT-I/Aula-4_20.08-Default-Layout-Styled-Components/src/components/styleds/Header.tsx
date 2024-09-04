import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 1px 14px 22px -5px rgba(49, 49, 49, 0.68);

  @media screen and (max-width: 480px) {
    padding: 0 14px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    a {
      display: inline-block;
      color: ${(props) => props.theme.textColor};
      font-size: 16px;

      &:hover {
        color: ${({ theme }) => theme.primaryColor};
      }

      @media screen and (max-width: 480px) {
        display: none;
      }
    }
  }
`;