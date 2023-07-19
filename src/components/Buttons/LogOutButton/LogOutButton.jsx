import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/Auth/authOperations";
import { LogOutButtonStyled } from "./LogOutButtonStyled";
import { getIsLoggedIn } from "../../../redux/Auth/authSelectors";

function LogOutButton() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      {isLoggedIn && (
        <LogOutButtonStyled type="button" onClick={handleLogOut}>
          Вийти
        </LogOutButtonStyled>
      )}
    </>
  );
}

export default LogOutButton;
