import styled from "styled-components";

export const StyledImg = styled.img`
  width: 156px;
  height: 208px;

  @media screen and (min-width: 768px) {
    width: 235px;
    height: 208px;
  }

  @media screen and (min-width: 1280px) {
    width: 274px;
    height: 256px;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 156px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    width: 235px;
  }

  @media screen and (min-width: 1280px) {
    width: 274px;
  }
`;

export const StyledProductName = styled.div`
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;

export const StyledP = styled.p`
  font-size: 16px;
  line-height: 1, 5;
  letter-spacing: -0.4px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: 156px;
  height: 48px;
  margin-top: 4px;
  background-color: var(--dark-blue);
  border-radius: 8px;
  outline: none;
  color: var(--main-white);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.4px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 235px;
    font-size: 20px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1280px) {
    width: 274px;
  }
`;

export const StyledBtnWrp = styled.div`
  width: 156px;
  display: flex;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    gap: 42px;
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
