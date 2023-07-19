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

const ModalFilter = ({onCloseModal, onSubmit}) => {

  const [filter, setFilter] = useState('');

const handleChooseFilterButton = (value) => {
  // const newFilter = ev.target.innerText;
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
          <FilterBtn onClick={()=> handleChooseFilterButton('Стельові')}>
            Стельові
            <IconBtn>
              <StyledIconCircle /> 
              {filter === 'стельові' && <StyledIconCircleFill />}
            </IconBtn>
          </FilterBtn>
          <FilterBtn onClick={()=> handleChooseFilterButton('Підвісні')}>
            Підвісні
            <IconBtn>
              <StyledIconCircle /> 
              {filter === 'підвісні' && <StyledIconCircleFill />}
            </IconBtn>
          </FilterBtn>
          <FilterBtn onClick={()=> handleChooseFilterButton('Бра')}>
            Бра
            <IconBtn>
              <StyledIconCircle /> 
              {filter === 'бра' && <StyledIconCircleFill />}
            </IconBtn>
          </FilterBtn >
          <FilterBtn onClick={()=> handleChooseFilterButton('Точкові')}>
            Точкові
            <IconBtn>
              <StyledIconCircle /> 
              {filter === 'точкові' && <StyledIconCircleFill />}
            </IconBtn>
          </FilterBtn>
          <FilterBtn onClick={()=> handleChooseFilterButton('Торшери')}>
            Торшери
            <IconBtn>
              <StyledIconCircle /> 
              {filter === 'торшери' && <StyledIconCircleFill />}
            </IconBtn>
          </FilterBtn>
          <FilterBtn onClick={()=> handleChooseFilterButton('Настільні')}>
            Настільні
            <IconBtn>
              <StyledIconCircle /> 
              {filter === 'настільні' && <StyledIconCircleFill />}
            </IconBtn>
          </FilterBtn>
          <FilterBtn onClick={()=> handleChooseFilterButton('Нічники')}>
            Нічники
            <IconBtn>
              <StyledIconCircle /> 
              {filter === 'нічники' && <StyledIconCircleFill />}
            </IconBtn>
          </FilterBtn>
          <StyledButtonChoose onClick={()=> onSubmit(filter)}>
            Застосувати
          </StyledButtonChoose>
        </StyledFiltersWrp>
      </ModalBody>
    </Overlay>
  );
};

export default ModalFilter;
