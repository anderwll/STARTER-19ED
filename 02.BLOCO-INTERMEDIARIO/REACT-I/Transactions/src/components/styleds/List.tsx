import styled from "styled-components";

export const List = styled.table`
  width: 100%;

  border-collapse: collapse;

  th {
    padding: 10px;
    border: solid 3px ${(props) => props.theme.primaryColor};
  }

  td {
    padding: 10px;
  }

  .acao {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }
`;
