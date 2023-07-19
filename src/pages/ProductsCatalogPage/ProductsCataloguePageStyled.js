import styled from "styled-components";

export const StyledFragment = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 328px;

  @media screen and (min-width: 768px) {
    width: 753px;
  }

  @media screen and (min-width: 1280px) {
    width: 1168px;
    margin-bottom: 40px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  line-height: 1, 2;
  letter-spacing: -0.4px;
  text-align: left;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 1, 2;
    margin-bottom: 32px;
  }
`;

export const StyledButton = styled.button`
  width: auto;
  height: 48px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1, 5;
  letter-spacing: -0.4px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  border: 1px solid var(--dark-blue);
  border-radius: 8px;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    /* width: 235px; */
    height: 48px;
    font-size: 20px;
    gap: 30px;
  }
`;

export const StyledInputWrp = styled.div`
  display: flex;
  padding: 4px 16px;
  width: 328px;
  height: 56px;
  border: 2px solid var(--middle-grey);
  border-radius: 4px 4px 0px 0px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 491px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
    height: 64px;
    font-weight: 500;
    line-height: 29px;
    margin-bottom: 40px;
  }
`;
export const StyledBtnSearch = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: scale cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    scale: 1.2;
  }
`;

export const StyledBtnDeleteSearch = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: scale cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    scale: 1.2;
  }
`;

export const StyledInput = styled.input`
width: 232px;
  outline: none;
  border: none;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  @media screen and (min-width: 768px) {
    width: 395px;
  }

  @media screen and (min-width: 1280px) {
    width: 508px;
    font-weight: 500;
    line-height: 29px;
    
  }
`;