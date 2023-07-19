import styled from 'styled-components';

export const LogOutButtonStyled = styled.button`
    border: none;
    white-space: nowrap;
    font-family: "Inter";
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.4px;
    padding: 12px 0;
    margin-left: 32px;
    color: var(--main-white);
    background-color: var(--dark-blue);
    cursor: pointer;

    &:hover {color: var(--middle-grey);}

    @media screen and (min-width: 1280px){
        font-size: 24px;
    }

    @media screen and (max-width: 768px) {
        margin: 0 16px;
        font-weight: 600;
        font-size: 20px;
        padding: 0;
        border-bottom: 1px solid var(--main-white);
        text-align: start;
        padding-bottom: 16px;
    }
`