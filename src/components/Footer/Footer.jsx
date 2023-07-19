import { useMediaRules } from "../../hooks/useMediaRules";
import {
  StyledFooter,
  FooterWrapper,
  LogoWrapper,
  InformationContainer,
  TextWrapper,
  StyledSpan,
  StyledA,
  StyledLink,
  StyledInstaA,
} from "./FooterStyled";
import mobileLogo from "../../images/Logo/Mobile/Footer/logo-mob@1x.svg";
import tabletLogo from "../../images/Logo/Tablet/Footer/logo-tablet@1x.svg";
import desktopLogo from "../../images/Logo/Desktop/Footer/logo_desktop@1x.svg";
import instagramLogo from "../../images/Logo/Insta_btn.svg";

// const handlePhoneClick = () => {
//   window.location.href = "tel:+380634779888";
// };

const adress = (
  <>
    <StyledSpan>Адреса:</StyledSpan>
    <StyledA href="https://goo.gl/maps/61MJb9vJXFnWGjra9" target="_blank">
      м. Чернігів, пр. Миру, 194 корп. 12
    </StyledA>
  </>
);

const telephone = (
  <>
    <StyledSpan>Телефон:</StyledSpan>
    <StyledA href="tel:+380634779888">+38 063 477 98 88</StyledA>
  </>
);

const workingHours = (
  <>
    <StyledSpan>Працюємо:</StyledSpan>
    <time>10:00 - 18:00 (без вихідних)</time>
  </>
);

function Footer() {
  const { isMobile, isTablet, isDesktop } = useMediaRules();
  return (
    <>
      <StyledFooter>
        <FooterWrapper>
          <LogoWrapper>
            {isMobile && <img src={mobileLogo} alt="logo" />}
            {isTablet && <img src={tabletLogo} alt="logo" />}
            {isDesktop && <img src={desktopLogo} alt="logo" />}
          </LogoWrapper>
          <InformationContainer>
            {isMobile && (
              <>
                <TextWrapper>{adress}</TextWrapper>
                <TextWrapper>{telephone}</TextWrapper>
                <TextWrapper>{workingHours}</TextWrapper>
              </>
            )}
            {!isMobile && (
              <>
                <TextWrapper>
                  {adress}
                  {telephone}
                </TextWrapper>
                <TextWrapper>{workingHours}</TextWrapper>
              </>
            )}
            <TextWrapper>
              <StyledLink to="/authors">Автори веб-сервісу</StyledLink>
            </TextWrapper>
          </InformationContainer>
          <StyledInstaA href="https://www.instagram.com/" target="_blank">
            <img src={instagramLogo} alt="Instagram" />
          </StyledInstaA>
        </FooterWrapper>
      </StyledFooter>
    </>
  );
}

export default Footer;
