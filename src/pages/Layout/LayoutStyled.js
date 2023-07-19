import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Main = styled.main`
    flex: 1;  
    padding: 40px 16px;

    @media screen and (min-width: 768px) {
        padding: 64px 44px;
    }

  @media screen and (min-width: 1280px) {
        padding: 72px 136px;
    }
`