import styled from "styled-components";

interface SelectProps {
  marginTop?: string;
}

export const Select = styled.select<SelectProps>`
  border-radius: 8px;
  padding: 10px 18px;

  font-size: 1rem;

  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};

  margin-top: ${(props) => props.marginTop};
`;
