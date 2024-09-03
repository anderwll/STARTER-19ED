import styled from "styled-components";

type TSize = "sm" | "md" | "lg";

interface AvatarProps {
  size?: TSize;
}

export const Avatar = styled.img<AvatarProps>`
  height: auto;
  border-radius: 50%;

  width: 150px;

  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
          width: 60px; 
        `;

      case "md":
        return `
          width: 110px; 
        `;

      case "lg":
        return `
          width: 150px; 
        `;
      default:
        return `
          width: 110px; 
        `;
    }
  }}
`;

// sm = 60px
// md =  80px;
// lg = 150px
