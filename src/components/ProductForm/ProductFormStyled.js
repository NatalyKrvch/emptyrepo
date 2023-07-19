import styled from "styled-components";

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
  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
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

export const FileInput = styled.input`
  display: none;
`;
export const FakeInputWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 328px;
  /* height: 56px; */
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  padding-left: 8px;

  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
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
     width: 495px;
  }
  
  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;
export const FakeButton = styled.span`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 56px;
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  max-width: 328px;
  height: 48px;
  background-color: ${props => props.disabled? "var(--middle-grey)" : "var(--dark-blue)"};;
  color: white;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-width: 373px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledImg = styled.img`
  display: block;
  width: 48px;
  height: 56px;
  object-fit: cover;
`;

export const StyledButtonDelete = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 56px;
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  background-color: var(--warning);
  cursor: pointer;
  outline: none;
`;

export const StyledInputWrapperPhoto = styled.li`
  position: relative;
  width: 328px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const StyledSelect = styled.select`
 width: 328px;
  height: 56px;
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
`

export const StyledWrpSelector = styled.div`
  position: relative;
  width: 328px;
  background-color: transparent;
  border-radius: 4px 4px 0px 0px;
  margin-left: auto;
  border: 1px solid var(--light-blue);
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


export const StyledButtonSelect = styled.span`
display: block;
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
  height: 30px;
  padding: 8px 16px;
  font-size: 16px;
  /* margin-left: auto; */
  line-height: 1,5;
  text-align: right;
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
