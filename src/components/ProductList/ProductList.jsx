import ProductCard from "../ProductCard/ProductCard";
import { StyledList } from "./ProductListStyled";

const ProductList = ({productsList, onOpen}) => {
  

  return (
    <StyledList>
      {productsList.map((product, index) => (
        <li key={index}><ProductCard product={product} onOpen={onOpen}/> </li>
      ))}
    </StyledList>
  );
};

export default ProductList;
