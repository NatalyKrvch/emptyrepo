import { useMediaRules } from "../../hooks/useMediaRules";
import { useState } from "react";
import { StyledHeader, HeaderWrapper, WrapperDiv } from "./HeaderStyled";
import { useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { useSelector } from "react-redux";
import MenuHeader from "../Menu/MenuHeader/MenuHeader";
import MenuBurger from "../Menu/MenuBurger/MenuBurger";
import desktopLogo from "../../images/Logo/Desktop/Header/logo_des@1x.svg";
import tabletLogo from "../../images/Logo/Tablet/Header/logo_tab@1x.svg";
import mobileLogo from "../../images/Logo/Mobile/Header/logo_mob@1x.svg";
import burgerImg from "../../images/Menu/Burger.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isMobile, isDesktop, isTablet } = useMediaRules();

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  const isLoggedIn = useSelector(getIsLoggedIn);

  const toggleBurgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <WrapperDiv onClick={handleLogoClick}>
            {isDesktop && <img src={desktopLogo} alt="Logo" />}
            {isTablet && <img src={tabletLogo} alt="Logo" />}
            {isMobile && <img src={mobileLogo} alt="Logo" />}
          </WrapperDiv>
          {!isMobile && <MenuHeader isLoggedIn={isLoggedIn} />}
          {isMobile && (
            <>
              <WrapperDiv onClick={toggleBurgerMenu}>
                <img src={burgerImg} alt="Menu" />
              </WrapperDiv>
            </>
          )}
        </HeaderWrapper>
      </StyledHeader>
      {isMobile && isMenuOpen && (
        <MenuBurger isLoggedIn={isLoggedIn} onClose={toggleBurgerMenu} />
      )}
    </>
  );
}

export default Header;
