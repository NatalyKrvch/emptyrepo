import styled from "styled-components";
import { MdSkipPrevious } from "react-icons/md";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CgPlayTrackNext } from "react-icons/cg";

export const StyledFragment = styled.div`
display: flex;
padding: 0px 6px;
justify-content: center;
align-items: center;
gap: 6px;
width: 328px;
margin-top: 48px;
margin-right: auto;
margin-left: auto;


@media screen and (min-width: 768px) {
 width: 512px;
 margin-right: 0;
  }

  @media screen and (min-width:  1280px) {
   width: 568px;
  }

`

export const StyledUl = styled.ul`
display: flex;
gap: 6px;
justify-content: center;
align-items: center;
`

export const StyledButton = styled.button`
display: flex;
width: 40px;
height: 40px;
padding: 9px;
justify-content: center;
align-items: center;
border: none;
background-color: transparent;
color: ${((props) => props.disabled ? 'var(--middle-grey)' : 'var(--main-black)')};
outline: none;
cursor: pointer;
`
export const StyledReactIconSkipPrevious = styled(MdSkipPrevious)`
color: ${((props) => props.disabled ? 'var(--middle-grey)' : 'var(--main-black)')};
`
export const StyledReactIconPrevious = styled(GrFormPrevious)`
color: ${((props) => props.disabled ? 'var(--middle-grey)' : 'var(--main-black)')};
`
export const StyledReactIconNext = styled(GrFormNext)`
color: ${((props) => props.disabled ? 'var(--middle-grey)' : 'var(--main-black)')};
`
export const StyledReactIconTrackNext = styled(CgPlayTrackNext)`
color: ${((props) => props.disabled ? 'var(--middle-grey)' : 'var(--main-black)')};
`


export const StyledLi = styled.li`
display: flex;
width: 48px;
height: 48px;
justify-content: center;
align-items: center;
border: none;
background-color: ${(props) => props.active ? 'var(--pressed-outlined)' : 'transparent'};
border-radius: 50%;
outline: none;
cursor: pointer;
font-size: 20px;
line-height: 1,5;
letter-spacing: 0.25px;
transition: background-color 0.5s ease;

&:hover{
background-color: var(--pressed-outlined);
}
`