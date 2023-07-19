import { useEffect } from "react";
import ProductCharacteristics from "../../components/ProductsCharacteristics/ProductCharacteristics";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/Product/productOperations";
import { getCurrentProduct } from "../../redux/Product/productSelectors";
import Carousel from "../../components/Carousel/Carousel";
import {
  PageWrapper,
  StyledP,
  Title,
  TitleWrapper,
  ShareIcon,
  ContentWrapper,
  CharacteristicsWrapper,
  StyledH1,
} from "./ProductCardPageStyled";

const ProductCardPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  const currentProduct = useSelector(getCurrentProduct);

  const allImgsURL = [
    currentProduct.productCoverURL,
    ...currentProduct.productPhotoURL,
  ];

  const productName = currentProduct.productName;
  const productCode = currentProduct.productCode;

  const handleShare = () => {
    console.log("share clicked");
  };

  return (
    <>
      <PageWrapper>
        <TitleWrapper>
          <Title>
            <StyledH1>{productName}</StyledH1>
            <StyledP>Артикул: {productCode}</StyledP>
          </Title>
          <ShareIcon onClick={handleShare} />
        </TitleWrapper>
        <ContentWrapper>
          <Carousel images={allImgsURL} />
          <CharacteristicsWrapper>
            <ProductCharacteristics
              price={currentProduct.productPrice}
              manufacturerCountry={currentProduct.productCountry}
              characteristicArray={currentProduct.additionalAttributes}
            />
          </CharacteristicsWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default ProductCardPage;
