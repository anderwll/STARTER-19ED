import styled from 'styled-components';

type TSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  size?: TSize;
}

export const Button = styled.button<ButtonProps>`
  color: #ffff;
  background-color: ${(props) => props.theme.primaryColor};
  border: 1px ${(props) => props.theme.primaryColor} solid;
  border-radius: 8px;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    border: 1px ${(props) => props.theme.primaryColor} solid;
    opacity: 80%;
    box-shadow: 0 0 0 2px rgb(49, 132, 253, 0.5);
  }

  &:disabled {
    background-color: #3333;
    border: 1px #3333 solid;
    box-shadow: none;
    cursor: auto;
  }

  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          padding: 12px 17px;
        `;

      case 'medium':
        return `
          padding: 14px 22px;
        `;

      case 'large':
        return `
          padding: 18px 28px;
        `;

      default:
        return `
         padding: 18px 28px;
        `;
    }
  }}
`;
