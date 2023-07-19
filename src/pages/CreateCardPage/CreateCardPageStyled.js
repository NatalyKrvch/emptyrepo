import styled from "styled-components";

export const StyledFragment = styled.div`
  position: relative;
  width: 328px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 754px;
    margin-left: 0;
    padding-left: 136px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 1168px;
  }
`;

export const TitleWrp = styled.div`
  width: 328px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 754px;
  }

  @media screen and (min-width: 1280px) {
    width: 1168px;
  }

  &::after {
    content: " ";
    position: absolute;
    width: 328px;
    bottom: -40px;
    left: 0;
    border: 1px solid var(--middle-grey);
    margin-bottom: 32px;
  

  @media screen and (min-width: 768px) {
    width: 754px;
  }

  @media screen and (min-width: 1280px) {
    width: 1168px;
  }
}
`;

export const StyledTitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -0.4px;
  margin-bottom: 8px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
