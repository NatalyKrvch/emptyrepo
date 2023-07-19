import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;

 @media screen and (min-width: 769px) and (max-width: 1280px){
    align-items: flex-start;
    margin-bottom: 412px;
  }

  @media screen and (min-width: 1281px){
    align-items: flex-start;
    margin-bottom: 154px;
  }
`

export const GridWrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 86px 194px 48px;
    padding: 32px 16px;

    @media screen and (min-width: 769px){
      grid-template-columns: 180px 447px 48px;
      grid-row-gap: 16px;
    }

    @media screen and (min-width: 1281px){
      grid-template-columns: 276px 447px 48px;
      grid-row-gap: 24px;
    }
`
export const Item = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    height: 48px;
    line-height: 21px;
    letter-spacing: 0.25px;
    
    @media screen and (min-width: 769px){
      font-size: 20px;
      line-height: 30px;
    }

    @media screen and (min-width: 1281px){
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -0.4;
    }
`
export const BoldItem = styled(Item)`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;

    @media screen and (min-width: 769px){
      font-size: 24px;
    }

    @media screen and (min-width: 1281px){
      font-size: 32px;
    }
`

export const Img = styled.img`
  padding: 12px;
`