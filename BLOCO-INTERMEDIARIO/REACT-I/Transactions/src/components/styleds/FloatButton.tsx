import styled from "styled-components";

type TSize = "small" | "medium" | "large";
type TVariant = "default" | "error";
interface ButtonProps {
  size?: TSize;
  variant?: TVariant;
}

export const FloatButton = styled.button<ButtonProps>`
  color: #ffff;
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  border-radius: 50%;
  cursor: pointer;

  position: fixed;
  bottom: 15px;
  right: 15px;

  font-size: 2rem;
  font-weight: 600;

  &:hover {
    opacity: 80%;
    box-shadow: 1px 8px 12px -5px rgba(49, 49, 49, 0.68);
  }

  &:disabled {
    background-color: #3333;
    border: 1px #3333 solid;
    box-shadow: none;
    cursor: auto;
  }

  ${(props) => {
    switch (props.size) {
      case "small":
        return `
          padding: 12px 17px;
        `;

      case "medium":
        return `
          padding: 14px 22px;
        `;

      case "large":
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
