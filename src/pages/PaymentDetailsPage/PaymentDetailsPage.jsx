import { useRef } from "react";
import {
  FakeButton,
  // FakeButtonDelete,
  // FakeInputText,
  // FakeInputWrp,
  StyledContainer,
  StyledDiv,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledTitle,
  StyledTitleWrp,
} from "./PaymentDetailsPageStyled";
// import { BiPlusCircle } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";
// import { BiMinusCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
// import { useState } from "react";

const PaymentDetails = () => {
  // const [showInput, setShowInput] = useState(false);
  // const [additionalDetails, setAdditionalDetail] = useState("");

  const inputRef = useRef(null);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const copyText = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          console.log("Скопійовано у буфер обміну");
        })
        .catch((error) => {
          console.error("Не вдалося скопіювати текст: ", error);
        });
    }
  };

  // const handleBtnAddDetail = () => {
  //   setShowInput(true);
  // };

  // const handleChangeAdditionalDetail = (evt) => {
  //   setAdditionalDetail(evt.target.value);
  // };

  // const onDeleteAdditionalDetail = () => {
  //   // setAdditionalDetail("");
  //   setShowInput(false);
  // };

  return (
    <StyledContainer>
      <StyledTitleWrp isLoggedIn={isLoggedIn}>
        <StyledTitle>Реквізити для оплати</StyledTitle>
      </StyledTitleWrp>
      <StyledDiv>
        <StyledInputWrapper isLoggedIn={isLoggedIn}>
          <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>IBAN</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={"UA393287040000026002054312944"}
            readOnly
            ref={inputRef}
            isLoggedIn={isLoggedIn}
          />
          {!isLoggedIn && (
            <FakeButton onClick={copyText}>
              <FiCopy size={"1.5em"} />
            </FakeButton>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper isLoggedIn={isLoggedIn}>
          <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>Банк</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={`АТ КБ "ПРИВАТБАНК" (МФО 328704)`}
            readOnly
            ref={inputRef}
            isLoggedIn={isLoggedIn}
          />
          {!isLoggedIn && (
            <FakeButton onClick={copyText}>
              <FiCopy size={"1.5em"} />
            </FakeButton>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper isLoggedIn={isLoggedIn}>
          <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>ЕДРПОУ</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={"38935167"}
            readOnly
            ref={inputRef}
            isLoggedIn={isLoggedIn}
          />
          {!isLoggedIn && (
            <FakeButton onClick={copyText}>
              <FiCopy size={"1.5em"} />
            </FakeButton>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper isLoggedIn={isLoggedIn}>
          <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>ФОП</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={`Ім'я Прізвище`}
            readOnly
            ref={inputRef}
            isLoggedIn={isLoggedIn}
          />
          {!isLoggedIn && (
            <FakeButton onClick={copyText}>
              <FiCopy size={"1.5em"} />
            </FakeButton>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper isLoggedIn={isLoggedIn}>
          <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>ІПН</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={"389351615535"}
            readOnly
            ref={inputRef}
            isLoggedIn={isLoggedIn}
          />
          {!isLoggedIn && (
            <FakeButton onClick={copyText}>
              <FiCopy size={"1.5em"} />
            </FakeButton>
          )}
        </StyledInputWrapper>
        {/* {showInput && (
          <StyledInputWrapper>
            <StyledLabel htmlFor="name">Додатково</StyledLabel>
            <StyledInput
              id="name"
              type="text"
              value={additionalDetails}
              onChange={handleChangeAdditionalDetail}
              ref={inputRef}
            />
            <FakeButtonDelete type="button " onClick={onDeleteAdditionalDetail}>
              <BiMinusCircle size={"1.8em"} />
            </FakeButtonDelete>
            {!isLoggedIn && (
              <FakeButton onClick={copyText}>
                <FiCopy size={"1.5em"} />
              </FakeButton>
            )}
          </StyledInputWrapper>
        )} */}

{/*         
        <FakeInputWrp>
          <FakeInputText>Додати інформацію</FakeInputText>
          <FakeButton onClick={handleBtnAddDetail}>
            <BiPlusCircle size={"1.5em"} />
          </FakeButton>
        </FakeInputWrp> */}
      </StyledDiv>
    </StyledContainer>
  );
};

export default PaymentDetails;
