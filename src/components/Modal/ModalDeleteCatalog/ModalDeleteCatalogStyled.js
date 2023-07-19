import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  min-width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(2px);
  opacity: 1;
  transition: opacity 0.3s ease-in-out, 
    left 0.3s ease-in-out;
`

export const ModalBody = styled.div`
position: relative;
width: 320px;
padding: 8px 8px 16px 8px;
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--main-white) ;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
 border-radius: 8px;

`

export const CloseButton = styled.button`
position: absolute;
top: 0;
right: 0;
width: 48px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
border: none;
background-color: transparent;
outline: none;
cursor: pointer;
`

export const StyledImg = styled.img`
width: 158px;
height: 117px;
margin: 40px auto 16px auto;
`

export const StyledTitle = styled.h2`
width: 280px;
color: var(--dark-grey);
text-align: center;
font-size: 24px;
font-weight: 400;
line-height: 1,2;
letter-spacing: -0.4px;
`

export const StyledP = styled.p`
width: 280px;
font-weight: 600;
text-align: center;
font-size: 24px;
line-height: 1,2;
letter-spacing: -0.4px;
color: var(--dark-grey);
`

export const StyledDiv = styled.div`
display: flex;
gap: 8px;
justify-content: center;

`

export const StyledBtnBack = styled.button`
width: 144px;
height: 48px;
padding: 12px 16px;
font-size: 16px;
font-weight: 600;
line-height: 1,5;
letter-spacing: -0.4px;
background-color: transparent;
outline: none;
border-radius: 8px;
border: 1px solid var(--dark-blue);
text-align: center;
transition: cubic-bezier(0.445, 0.05, 0.55, 0.95);

&:hover{
background-color: var(--warning);
color: var(--main-white);
}
`