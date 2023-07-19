import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: var(--dark-blue);
    height: 56px;

        @media screen and (min-width: 1280px) {
            height: 64px;
        }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 56px;
    padding: 0 5%;
 
        @media screen and (min-width: 1280px) {
            height: 64px;
        }
`;

export const WrapperDiv = styled.div`
    margin: 0;
    padding: 12px;
    cursor: pointer;
`;
