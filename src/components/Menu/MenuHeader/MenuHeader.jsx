import { StyledUl, StyledLink, MenuWrapper } from "./MenuHeaderStyled";
import menuConfig from "../menuConfig.json";
import PropTypes from "prop-types";
import LogOutButton from "../../Buttons/LogOutButton/LogOutButton";

function MenuHeader(props) {
  MenuHeader.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

  const { isLoggedIn } = props;
  const menuData = isLoggedIn ? menuConfig.adminMenu : menuConfig.userMenu;

  return (
    <>
      <MenuWrapper>
        <StyledUl>
          {menuData.map((item, index) => (
            <li key={index}>
              <StyledLink to={item.url}>{item.title}</StyledLink>
            </li>
          ))}
        </StyledUl>
        {isLoggedIn && <LogOutButton />}
      </MenuWrapper>
    </>
  );
}

export default MenuHeader;
