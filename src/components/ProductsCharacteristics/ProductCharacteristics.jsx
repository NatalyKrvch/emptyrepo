import {
  StyledLi,
  StyledP,
  StyledPAttribute,
  StyledPCountry,
  StyledPriceCurrency,
  StyledSpanAttribute,
  StyledSpanCountry,
  StyledUl,
  Styledh4,
} from "./ProductCharacteristicsStyled";
import { nanoid } from "nanoid";

const ProductCharacteristics = ({
  price,
  manufacturerCountry,
  characteristicArray,
  productCategory

}) => {
  return (
    <>
      <Styledh4>Характеристики товару</Styledh4>
      <StyledP>
        Ціна: <StyledPriceCurrency>{`${price} грн.`}</StyledPriceCurrency>
      </StyledP>
      <StyledPCountry>
        Країна <br /> походження:{" "}
        <StyledSpanCountry>{manufacturerCountry}</StyledSpanCountry>
      </StyledPCountry>
      <StyledP>
        Категорія: <StyledSpanCountry>{productCategory}</StyledSpanCountry>
      </StyledP>
      {characteristicArray.length !== 0 && (
        <StyledUl>
          {characteristicArray.map((item) => (
            <StyledLi key={nanoid()}>
              <StyledPAttribute>
                {item.name ? `${item.name}: ` : ""}
              </StyledPAttribute>
              <StyledSpanAttribute>
                {item.value ? item.value : ""}
              </StyledSpanAttribute>
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
};

export default ProductCharacteristics;
