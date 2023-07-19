import styled from "styled-components";

export const StyledList = styled.ul`
  width: 328px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 768px) {
    width: 753px;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 1168px;
  }
`;
