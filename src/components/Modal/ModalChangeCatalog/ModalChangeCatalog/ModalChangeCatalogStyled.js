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
padding: 40px 20px 32px 20px;
position: fixed;
  background-color: var(--main-white) ;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
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
margin-left: auto;
margin-right: auto;
`