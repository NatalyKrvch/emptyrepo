import { useDispatch, useSelector } from "react-redux";
import { StyledButtonSelect, StyledList, StyledOptions, StyledWrpSelector } from "./DropdownCardSelectStyled";
import { selectFilter } from "../../redux/Filter/selectors";
import { setFilter } from "../../redux/Filter/slice";
import { useState } from "react";
import { GoTriangleUp,  GoTriangleDown } from "react-icons/go"




const DropdownCardSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

 
  const handleSelect = (selectedOption) => {
    dispatch(setFilter(selectedOption));
    setIsOpen(false);
  };

  const handleOptionClick = (selectedOption) => {
    if (selectedOption !== filter) {
      handleSelect(selectedOption);
    }
  };

  return (
    <>
      <StyledWrpSelector>
        <StyledButtonSelect onClick={() => setIsOpen(!isOpen)}>{filter} {isOpen ? <GoTriangleUp/> : <GoTriangleDown/>}</StyledButtonSelect>
        {isOpen && (<StyledList>
          <StyledOptions onClick={()=> handleOptionClick("Картка товару")}>Картка товару</StyledOptions>
          <StyledOptions onClick={()=> handleOptionClick("Картка каталогу")}>Картка каталогу</StyledOptions>
        </StyledList>)}
      </StyledWrpSelector>
    </>
  )
}

export default DropdownCardSelector



 // const setFilterOnChange = (evt) => {
  //   dispatch(setFilter(evt.target.value));
  // }
  


  {/* <StyledSelec value={filter} onChange={setFilterOnChange}>
          <StyledOptions value="Вид картки" hidden>Вид картки</StyledOptions>
          <StyledOptions value="Картка товару">Картка товару</StyledOptions>
          <StyledOptions value="Картка каталогу">Картка каталогу</StyledOptions>
        </StyledSelec> */}