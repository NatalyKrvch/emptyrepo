import styled from "styled-components"; 

export const StyledContainer = styled.div`
width: 360px;
padding-top: 40px;
padding-left: 16px;
padding-right: 16px;
padding-bottom: 77px;
margin-left: auto;
margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 495px;
    margin-left: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }

`
export const StyledTitleWrp = styled.div`
width: 328px;
border-bottom: 1px solid var(--middle-grey);
margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 495px;
    margin-bottom: 42px;
   
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
     margin-bottom: 53px;
  }
`

export const StyledTitle = styled.h1`
font-size: 24px;
font-weight: 400;
line-height: 1,2;
letter-spacing: -0.4px;
  @media screen and (min-width: 768px) {
   font-size: 48px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }

`
export const StyledProductName = styled.p`
font-size: 24px;
font-weight: 400;
line-height: 1,2;
letter-spacing: -0.4px;
  @media screen and (min-width: 768px) {
   font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    
  }
`

export const StyledTextWrp = styled.div`
width: 328px;
display: flex;
align-items: center;
justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 495px;
    
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }

`

export const StyledArticle = styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1,5;
letter-spacing: -0.4px;


`


export const StyledWrpUpQrCode = styled.div`
width: 320px;
height: 250px;
padding: 32px 67px;
margin: 32px auto auto auto;
border-radius: 8px;
box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);

 @media screen and (min-width: 768px) {
    width: 495px;
    height: 388px;
    padding: 90px 156px;
    margin-left: 0;
  }

    @media screen and (min-width: 1280px) {
    width: 572px;
    height: 449px;
    padding: 120px 190px;

  }
`


export const StyledQrCodeWrp = styled.div`
width: 186px;
height: 186px;
display: flex;
align-items: center;
justify-content: center;
`

export const StyledButton = styled.button`
width: 48px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
`