import { useNavigate } from "react-router";
import DropdownCardSelector from "../../components/DropdownCardSelect/DropdownCardSelect";
import {
  NextButton,
  StyledFragment,
  StyledTitle,
  StyledWrp,
  TitleWrp,
} from "./SelectCardPageStyled";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/Filter/selectors";


const SelectCardPage = () => {
  const navigate = useNavigate();
  const filter = useSelector(selectFilter);

  return (
    <StyledFragment>
      <TitleWrp>
        <StyledTitle>Створити картку</StyledTitle>
      </TitleWrp>
      <StyledWrp>
        <DropdownCardSelector />
      </StyledWrp>
      <NextButton
          type="button"
          disabled={filter === "Вид картки"}
          onClick={() => navigate("/createcard")}
        >
          Далі
        </NextButton>
    </StyledFragment>
  );
};

export default SelectCardPage;
