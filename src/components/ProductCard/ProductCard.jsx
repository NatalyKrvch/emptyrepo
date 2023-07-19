import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StyledBtn,
  StyledBtnWrp,
  StyledButton,
  StyledImg,
  StyledP,
  StyledProductName,
  StyledTextWrapper,
} from "./ProductCardStyled";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import { removeProduct } from "../../redux/Product/productOperations.js";

const ProductCard = ({
  product: { productCoverURL, productName, productCode, productPrice,  _id }, onOpen
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteButton = (_id) => {
    console.log(_id);
    dispatch(removeProduct(_id));
  };
  return (
    <div>
      <StyledImg src={productCoverURL} alt="Picture" />
      <StyledTextWrapper>
        <StyledProductName>{productName}</StyledProductName>
        <StyledP>{`Артикул: ${productCode}`}</StyledP>
        <StyledP>{`Ціна: ${productPrice} грн`}</StyledP>
        {!isLoggedIn ? (
          <StyledButton
            type="button"
            onClick={() => navigate(`/productcard/${_id}`)}
          >
            Деталі
          </StyledButton>
        ) : (
          <StyledBtnWrp>
            <StyledBtn
              type="button"
              onClick={() => navigate(`/editproductcard/${_id}`)}
            >
              <RiPencilLine size={"1.5em"} />
            </StyledBtn>
            <StyledBtn type="button"
            onClick={()=> onOpen(productCode, _id)}>

              <RiDeleteBin6Line size={"1.5em"} />
            </StyledBtn>
          </StyledBtnWrp>
        )}
      </StyledTextWrapper>
    </div>
  );
};

export default ProductCard;
