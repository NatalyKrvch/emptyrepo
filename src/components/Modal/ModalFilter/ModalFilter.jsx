// import { StyledIconCircle } from "react-icons/tb";
// import { StyledIconCircleFill } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import {
  CloseButton,
  FilterBtn,
  IconBtn,
  ModalBody,
  Overlay,
  StyledButtonChoose,
  StyledFiltersWrp,
  StyledIconCircle,
  StyledIconCircleFill,
  StyledTitle,
} from "./ModalFilterStyled";
import { useState } from "react";
import { categoryList } from "../../../ProductForm/categoryList.json";

const ModalFilter = ({onCloseModal, onSubmit}) => {

  const [filter, setFilter] = useState('');

const handleChooseFilterButton = (value) => {
  setFilter(value.toLowerCase());
}

  return (
    <Overlay>
      <ModalBody>
        <CloseButton onClick={()=>onCloseModal()}>
          <GrClose />
        </CloseButton>
        <StyledTitle>Фільтри</StyledTitle>
        <StyledFiltersWrp >
          {categoryList.map((el) => {
            return   <FilterBtn key={el}  onClick={() => handleChooseFilterButton(el)}>
              {el}
             <IconBtn>
              <StyledIconCircle /> 
              {(filter === `${el.toLowerCase()}`) && <StyledIconCircleFill />}
            </IconBtn>
            </FilterBtn>
            })}
          <StyledButtonChoose onClick={()=> onSubmit(filter)}>
            Застосувати
          </StyledButtonChoose>
        </StyledFiltersWrp>
      </ModalBody>
    </Overlay>
  );
};

export default ModalFilter;
