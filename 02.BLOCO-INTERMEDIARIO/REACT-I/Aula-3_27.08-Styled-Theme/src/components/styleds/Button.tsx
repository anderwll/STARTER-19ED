import styled from "styled-components";

export const Button = styled.button`
  color: #ffff;
  background-color: ${(props) => props.theme.primaryColor};
  border: 1px ${(props) => props.theme.primaryColor} solid;
  border-radius: 8px;
  padding: 18px 28px;
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
`;
