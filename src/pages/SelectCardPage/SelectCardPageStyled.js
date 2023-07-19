import styled from "styled-components";


export const StyledFragment = styled.div`
  width: 328px;
 
  
  @media screen and (min-width: 768px) {
    padding-left: 136px;
  
    
  }

  @media screen and (min-width: 1280px) {
   padding-top: 72px;
   width: 1168px;
  }
`
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
    content: ' ';
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



export const NextButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 12px 24px;
width: 328px;
height: 48px;
background-color: ${props => props.disabled? "var(--middle-grey)" : "var(--dark-blue)"};
color: white;
border-radius: 8px;
margin: 32px auto 20px auto;

@media screen and (min-width: 768px) {
    width: 365px;
    margin-left: 0;
    
  }

  @media screen and (min-width: 1280px) {
    width: 373px;
  }
`

export const StyledWrp = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 32px;
margin-right: auto;

/* @media screen and (min-width: 768px) {
    margin-right: auto;
    
  }

  @media screen and (min-width: 1280px) {
    margin-right: auto;
  } */

`
