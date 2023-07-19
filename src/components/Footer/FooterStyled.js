import styled from 'styled-components';
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
    background-color: var(--dark-blue);

    @media screen and (max-width: 767px) {
        height: 152px;
    }
    
    @media screen and (min-width: 768px) {
        height: 160px;
    }
`
export const FooterWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
`
export const LogoWrapper = styled.div`
    position: absolute;

    @media screen and (max-width: 767px) {

        top: 15px;
        left: 15px;
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {

        top: 30px;
        left: 25px;
    }
    
    @media screen and (min-width: 1280px) {

        top: 25px;
        left: 100px;
    }
`

export const StyledInstaA = styled.a`   
    position: absolute;
    cursor: pointer;

    @media screen and (max-width: 767px) {
      top: 90px;
      left: 7px;
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      top: 10px;
      right: 10px;
    }

    @media screen and (min-width: 1279px) {
        top: 10px;
        right: 100px;
    }
`
export const InformationContainer = styled.div`
    position: absolute;
    left: 70px;
    top: 15px;
    color: var(--light-blue);
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
    font-family: Inter;
    font-weight: 400;
    font-size: 10px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
     
        font-weight: 500;
        font-size: 14px;
        left: 90px;
        top: 25px;
    }

    @media screen and (min-width: 1279px) {
        font-weight: 500;
        font-size: 16px;
        left: 250px;
        top: 25px;
    }
`
export const TextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const StyledSpan = styled.span`
    height: 15px;
    min-width: 70px;

    @media screen and  (min-width: 768px) {
        margin-left: 40px;
        height: 29px;
        min-width: 86px;
        margin-right: 10px;
    }
`
export const StyledLink = styled(Link)`
    margin-top: 20px;
    text-decoration: underline;
    color: var(--light-blue); 
    &:visited {color: var(--light-blue);}

    @media screen and (min-width: 768px) {
        margin-left: 40px;
    }
`
export const StyledA = styled.a`
    color: var(--light-blue); 
    &:visited {color: var(--light-blue);}
`