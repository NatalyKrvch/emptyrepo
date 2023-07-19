import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 32px;

  @media screen and (min-width: 769px) and (max-width: 1280px){
    margin-bottom: 227px;
  }

  @media screen and (min-width: 1281px){
    margin-bottom: 56px;
  }
`
export const StyledH1 = styled.h1`
  font-weight: 400;
  letter-spacing: -0.4px;
  font-size: 32px;
  line-height: 32px;
  border-bottom: 1px solid var(--middle-grey);
  padding-bottom: 8px;
  width: 100%;

  @media screen and (min-width: 769px) {
    font-size: 48px;
    line-height: 57.6px;
  }    
`
export const StyledP = styled.p`
  margin: 32px 0 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;

  @media screen and (min-width: 769px) {
    margin: 40px 0 24px;
    font-size: 24px;
    line-height: 36px;
  }  

  @media screen and (min-width: 1281px) {
    margin: 48px 0 24px;
  }
`
export const StyledTextarea = styled.textarea`
  font-family: Inter;
  height: 169px;
  width: 327px;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid var(--light-blue);

  font-weight: 500;
  font-size: 14px;
  line-height: 29px;
  letter-spacing: -0.4px;
  resize: none;
  position: relative;

  ${(props) =>
    props.isTextareaEmpty &&
    css`
      border-color: var(--warning);
    `}

  &::placeholder {
    color: var(--middle-grey);
    top: 12px;
    left: 12px;
    letter-spacing: -0.4px;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 769px) {
    height: 364px;
    width: 495px;
    &::placeholder {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1281px) {
    width: 570px;
  }
`
export const StyledForm = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
export const StyledButton = styled.button`
  background-color: var(--dark-blue);
  height: 48px;
  width: 328px;
  margin-top: 24px;
  border-radius: 8px;
  border: none;
  color: var(--main-white);
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: pointer;

  &[disabled] {
    background-color: var(--middle-grey);
    cursor: not-allowed; 
  }

  &:active:not(:disabled) {
    background-color: var(--pressed-blue);
    border: 2px solid var(--dark-blue);
  }

  @media screen and (min-width: 769px) {
    height: 56px;
    width: 365px;
    font-size: 20px;
  }

  @media screen and (min-width: 1281px) {
    width: 371px;
  }
`