import styled from "styled-components";

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #f7f7f7;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f7f7f7;
  }

  tr:nth-child(even) {
    background-color: #f7f7f7;
  }

  tr:hover {
    background-color: #f1f1f1;
  }

  button {
    margin-right: 8px;
  }
`;
