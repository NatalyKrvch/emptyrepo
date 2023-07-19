import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    padding: 64px 40px auto 40px;
    max-width: 834px;
  }

  @media screen and (min-width: 1280px) {
    padding: 72px 136px auto 136px;
    max-width: 1440px;
  }
`;

export const StyledTitleWrp = styled.div`
max-width: 328px;
margin-left: auto;
margin-right: auto;


@media screen and (min-width: 768px) {
  max-width: 754px;
  margin: 0;
  border-bottom: 1px solid var(--middle-grey);
  }

  @media screen and (min-width: 1280px) {
    max-width: 1168px;

  }

`

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

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 328px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-top: 40px;
    max-width: 624px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 671px;
    gap: 24px;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 328px;
  height: ${({isLoggedIn}) => isLoggedIn? 'auto' : '56px' };
  display: flex;
  align-items: ${({isLoggedIn}) => isLoggedIn? 'center' : 'flex-start' };
  justify-content:${({isLoggedIn}) => isLoggedIn? 'left' : 'space-evenly' };

  @media screen and (min-width: 768px) {
    /* align-items: flex-start;
    justify-content: space-evenly; */
    width: 624px;
    gap: 18px;
  }
  

  @media screen and (min-width: 1280px) {
    width: 572px;
    justify-content: space-evenly;
    line-height: 1;
    letter-spacing: -0.4px;
  }
`;

export const StyledLabel = styled.label`
  position: ${({isLoggedIn}) => isLoggedIn? 'absolute' : 'static' };
  height: ${({isLoggedIn}) => isLoggedIn? '24px' : '48px' };
  width: ${({isLoggedIn}) => isLoggedIn? 'auto' : '128px' };
  font-size: ${({isLoggedIn}) => isLoggedIn? '12px' : '16px' };
  line-height: ${({isLoggedIn}) => isLoggedIn? '2' : '1.5px' };
  color: ${({isLoggedIn}) => isLoggedIn? 'var(--dark-grey)' : 'var(--main-black)' } ;
  background-color: ${({isLoggedIn}) => isLoggedIn? 'var(--light-blue)' : 'var(--main-white)' } ;
  padding: 0 4px;
  left: 12px;
  top: -8px;

  @media screen and (min-width: 768px) {
    /* position: static;
    width: 128px;
    height: 48px; */
    /* color: var(--main-black);
    background-color: var(--main-white); */
    text-align: start;
    font-size: 16px;
    line-height: 1, 5;
    letter-spacing: -0.4px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledCoverLabel = styled.label`
  position: absolute;
  height: 24px;
  font-size: 12px;
  line-height: 2;
  color: var(--dark-grey);
  background-color: var(--light-blue);
  padding: 0 4px;
  left: 68px;
  top: -8px;
`;

export const StyledInput = styled.input`
  width: 328px;
  padding: ${({isLoggedIn}) => isLoggedIn? '16px' : '4px' };
  text-align:${({isLoggedIn}) => isLoggedIn? 'left' : 'start' };
  border: ${({isLoggedIn}) => isLoggedIn? '1px solid var(--light-blue)' : 'none' };
  border-radius: 4px;
  outline: var(--dark-blue);

  @media screen and (min-width: 768px) {
    height: auto;
    width: 624px;
    outline: none;
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const FakeInputWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 328px;
  /* height: 56px; */
  border: 1px solid var(--light-blue);
  border-radius: 8px;
  padding-left: 8px;

  @media screen and (min-width: 768px) {
    max-width: 624px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
   
  
  }
`;
export const FakeInputText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.4px; 

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    max-width: 624px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
    height: 56px;
  }
`;
export const FakeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    outline: none;
    border: none;
  }

  @media screen and (min-width: 1280px) {
  
   
  }
`;

export const StyledButton = styled.button`
/* position: absolute;
top: 0;
right: 0; */
display: flex;
align-items: center;
justify-content: center;
width: 48px;
height: 49px;
border: none;
border-radius: 4px;
background-color: transparent;
cursor: pointer;
outline: none;
`

export const FakeButtonDelete = styled.button`
position: absolute;
top: 0;
right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    outline: none;
    border: none;
  }

  @media screen and (min-width: 1280px) {
  
   
  }
  `