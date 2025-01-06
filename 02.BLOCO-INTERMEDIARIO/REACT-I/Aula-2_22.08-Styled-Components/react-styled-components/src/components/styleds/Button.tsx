import styled from "styled-components";

export const Button = styled.button`
  color: #ffff;
  background-color: #0d6efd;
  border: 1px #0d6efd solid;
  border-radius: 8px;
  padding: 18px 28px;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: #0262f3;
    border: 1px #0064fb solid;
    box-shadow: 0 0 0 2px rgb(49, 132, 253, 0.5);
  }

  &:disabled {
    background-color: #3333;
    border: 1px #3333 solid;
    box-shadow: none;
    cursor: auto;
  }
`;
