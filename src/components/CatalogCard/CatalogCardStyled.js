import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 156px;

  @media screen and (min-width: 768px) {
    width: 235px;
  }

  @media screen and (min-width: 1280px) {
    width: 274px;
  }
`;
export const StyledImg = styled.img`
  width: 156px;
  height: 208px;
  object-fit: cover;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    width: 235px;
    height: 298px;
  }

  @media screen and (min-width: 1280px) {
    width: 274px;
    height: 319px;
  }
`;

export const StyledTextWRP = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;
export const StyledP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.4px;

  @media screen and (min-width: 768px) {
    width: 235px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    letter-spacing: 0.25px;
  }
`;

export const StyledBtnWrp = styled.div`
  width: 156px;
  display: flex;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    width: 235px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    width: 274px;
  }
`;

export const StyledBtn = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: flex-start;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    align-items: center;
  }
`;
