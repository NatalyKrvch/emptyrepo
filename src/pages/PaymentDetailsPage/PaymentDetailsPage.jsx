import { useRef } from "react";
import {
  FakeButton,
  StyledContainer,
  StyledDiv,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledTitle,
  StyledTitleWrp,
} from "./PaymentDetailsPageStyled";
import { FiCopy } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import Notiflix from "notiflix";

const PaymentDetails = () => {
  const ibanRef = useRef(null);
  const bankRef = useRef(null);
  const edrpouRef = useRef(null);
  const fopRef = useRef(null);
  const ipnRef = useRef(null);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const copyText = (ref) => {
    if (ref.current) {
      ref.current.select();
      navigator.clipboard
        .writeText(ref.current.value)
        .then(() => {
          Notiflix.Notify.success("Скопійовано у буфер обміну");
        })
        .catch((error) => {
          Notiflix.Notify.failure("Не вдалося скопіювати текст: ", error);
        });
    }
  };

  return (
    <StyledContainer>
      <StyledTitleWrp isLoggedIn={isLoggedIn}>
        <StyledTitle>Реквізити для оплати</StyledTitle>
      </StyledTitleWrp>
      <StyledDiv>
        <StyledInputWrapper isLoggedIn={isLoggedIn}>
          <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
            IBAN
          </StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={"UA393287040000026002054312944"}
            readOnly
            ref={ibanRef}
            isLoggedIn={isLoggedIn}
          />
          {!isLoggedIn && (
            <FakeButton onClick={() => copyText(ibanRef)}>
              <FiCopy size={"1.5em"} />
            </FakeButton>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper isLoggedIn={isLoggedIn}>
          <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
            Банк
          </StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={`АТ КБ "ПРИВАТБАНК" (МФО 328704)`}
            readOnly
            ref={bankRef}
            isLoggedIn={isLoggedIn}
          />
          {!isLoggedIn && (
            <FakeButton onClick={() => copyText(bankRef)}>
              <FiCopy size={"1.5em"} />
            </FakeButton>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper isLoggedIn={isLoggedIn}>
          <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
            ЕДРПОУ
          </StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={"38935167"}
            readOnly
            ref={edrpouRef}
            isLoggedIn={isLoggedIn}
          />
          {!isLoggedIn && (
            <FakeButton onClick={() => copyText(edrpouRef)}>
              <FiCopy size={"1.5em"} />
            </FakeButton>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper isLoggedIn={isLoggedIn}>
          <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
            ФОП
          </StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={`Ім'я Прізвище`}
            readOnly
            ref={fopRef}
            isLoggedIn={isLoggedIn}
          />
          {!isLoggedIn && (
            <FakeButton onClick={() => copyText(fopRef)}>
              <FiCopy size={"1.5em"} />
            </FakeButton>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper isLoggedIn={isLoggedIn}>
          <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
            ІПН
          </StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={"389351615535"}
            readOnly
            ref={ipnRef}
            isLoggedIn={isLoggedIn}
          />
          {!isLoggedIn && (
            <FakeButton onClick={() => copyText(ipnRef)}>
              <FiCopy size={"1.5em"} />
            </FakeButton>
          )}
        </StyledInputWrapper>
      </StyledDiv>
    </StyledContainer>
  );
};

export default PaymentDetails;
