import styled from "styled-components";

export const StyledFragment = styled.div`
  position: relative;
  max-width: 328px;
  padding: 40px 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    padding: 64px 40px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 72px, 136px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 32px;
  line-height: 1;
  letter-spacing: -0.4px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.2;
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
    height: 1px;
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 328px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    max-width: 495px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 328px;
  /* height: 56px; */
  display: flex;
  align-items: center;
  justify-content: left;

  &:focus {
   border: 0px solid var(--dark-blue);
  }

  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  height: 24px;
  font-size: 12px;
  line-height: 2;
  color: var(--dark-grey);
  background-color: var(--light-blue);
  padding: 0 4px;
  left: 12px;
  top: -8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledInput = styled.input`
  width: 328px;
  /* height: 56px; */
  padding: 16px;
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  outline: var(--dark-blue);

  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  width: 328px;
  height: 48px;
  font-size: 16px;
  background: var(--dark-blue);
  color: white;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 365px;
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 371px;
  }
`;

export const ButtonEye = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 48px;
  height: 48px;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

 
`;
export const PasswordWrp = styled.div`
  position: relative;
`;
