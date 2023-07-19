import styled from "styled-components";

export const StyledWrpSelector = styled.div`
  width: 328px;
  background-color: var(--light-blue);
  border-radius: 4px 4px 0px 0px;
  /* padding: 16px; */
  margin-left: auto;
  margin-right: auto;
  /* margin-bottom: 16px; */
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 495px;
    margin-left: 0;
    
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const StyledList = styled.ul`
margin-top: -15px;
`


export const StyledButtonSelect = styled.button`
width: 328px;
height: 56px;
font-size: 16px;
line-height: 1,5;
letter-spacing: -0.4px;
padding: 16px;
display: flex;
border: none;
align-items: center;
justify-content: space-between;
outline: none;
cursor: pointer;
background-color: transparent;

@media screen and (min-width: 768px) {
    width: 495px;
    
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`

export const StyledOptions = styled.li`
  max-width: 328px;
  /* height: 72.5px; */
  padding: 20px 16px;
  font-size: 16px;
  line-height: 1,5;
  text-align: left;
  letter-spacing: -0.4px;
  background: var(--light-blue);
  box-shadow: var(--box-shadow);
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    max-width: 495px;
    
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
  }
`;
