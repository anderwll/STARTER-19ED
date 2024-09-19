import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  div,
  form {
    background-color: ${({ theme }) => theme.backgroundColor};
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    div {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
    }
  }
`;
