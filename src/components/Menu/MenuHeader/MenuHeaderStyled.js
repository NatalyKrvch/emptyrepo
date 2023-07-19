import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center; 
`

export const StyledUl = styled.ul`
    display: flex;
    gap: 32px;
    color: var(--main-white);
    font-family: "Inter";
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.4px;

    @media screen and (min-width: 1280px){
        font-size: 24px;
    }
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: var(--main-white); 
    padding: 12px 0;

    &:visited {color: var(--main-white);}
    &:hover {color: var(--middle-grey);}
    &.active {
        color: var(--middle-grey);
    }
`