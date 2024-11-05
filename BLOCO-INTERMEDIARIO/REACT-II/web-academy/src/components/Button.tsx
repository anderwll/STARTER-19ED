import styled from "styled-components";

interface ButtonProps {
  $color?: "success" | "info" | "error";
}

export const Button = styled.button<ButtonProps>`
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;

  background-color: ${({ $color }) => {
    switch ($color) {
      case "success":
        return "#2dfa12";
      case "info":
        return "#007bff";
      case "error":
        return "#dc3545";
      default:
        return "#007bff";
    }
  }};

  &:hover {
    opacity: 85%;
  }
`;
