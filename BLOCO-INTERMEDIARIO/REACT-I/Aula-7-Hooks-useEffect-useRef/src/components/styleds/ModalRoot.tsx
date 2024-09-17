import styled from "styled-components";

export const ModalRoot = styled.div`
  position: fixed;
  /* top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
  inset: 0;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: #ffff;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    div {
      padding: 0;
      display: flex;
      flex-direction: row;
      margin-top: 20px;
    }
  }
`;
