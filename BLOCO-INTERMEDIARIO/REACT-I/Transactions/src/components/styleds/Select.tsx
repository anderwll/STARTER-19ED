import styled from "styled-components";

export const Select = styled.select`
  border-radius: 8px;
  padding: 10px 18px;

  font-size: 1rem;

  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;
