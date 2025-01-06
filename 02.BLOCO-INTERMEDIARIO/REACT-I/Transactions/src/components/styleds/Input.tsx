import styled from "styled-components";

export const Input = styled.input`
  width: 400px;
  padding: 15px 28px;
  font-size: 1.2rem;
  border-radius: 8px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${(props) => props.theme.primaryColor};

  &:hover {
    box-shadow: 1px 8px 12px -5px rgba(49, 49, 49, 0.68);
  }

  &:focus {
    box-shadow: 1px 8px 14px -5px rgba(49, 49, 49, 0.68);
  }
`;
