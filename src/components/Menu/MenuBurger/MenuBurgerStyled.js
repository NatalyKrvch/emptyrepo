import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const slideIn = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const slideOut = keyframes`
   from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const MenuBurgerContainer = styled.div`
    background-color: var(--dark-blue);
    min-width: 100%;
    min-height: 100vh;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 10;
    animation-duration: 0.4s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-name: ${({ isMenuOpen }) => (isMenuOpen ? slideIn : slideOut)};
`
export const CrossWrapper = styled.div`
    padding: 12px;
    position: absolute;
    top: 16px;
    right: 16px;
`

export const StyledUl = styled.ul`
    margin: 84px 16px 0;
    min-width: 328px;
    color: var(--main-white);
    font-family: "Inter";
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.4px;
`
export const StyledLi = styled.li`
    height: 40px;
    border-bottom: 1px solid var(--main-white);
    margin-bottom: 32px;
`
export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: var(--main-white); 
    &:visited {color: var(--main-white);} 
    &.active {
        color: var(--middle-grey);
    }
`