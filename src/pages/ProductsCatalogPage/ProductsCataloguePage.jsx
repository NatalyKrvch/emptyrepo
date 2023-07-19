import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import {
  StyledBtnSearch,
  StyledButton,
  StyledFragment,
  StyledInput,
  StyledInputWrp,
  StyledTitle,
} from "./ProductsCataloguePageStyled";
import { FiFilter } from "react-icons/fi";
import { useEffect } from "react";
import { useState } from "react";
import { getAllProducts } from "../../redux/Product/productSelectors";
import { getProducts } from "../../redux/Product/productOperations";
import Pagination from "../../components/Pagination/Pagination";
import { useMediaRules } from "../../hooks/useMediaRules";
import ModalFilter from "../../components/Modal/ModalChangeCatalog/ModalFilter/ModalFilter";
import { useSearchParams } from "react-router-dom";
import ModalDeleteProduct from "../../components/Modal/ModalChangeCatalog/ModalDeleteProduct/ModalDeleteProduct";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { AiOutlineSearch } from "react-icons/ai";
import Notiflix from "notiflix";

const ProductsCataloguePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [productId, setProductId] = useState("");
  const [updatedProductList, setUpdatedProductList] = useState([]);
  const [filterByCode, setFilterByCode] = useState("");
  // const [totalProducts, setTotalPoducts] = useState([]);

  const { isMobile, isTablet } = useMediaRules();
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  console.log(products);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const isLoggedIn = useSelector(getIsLoggedIn);
  // const lastProductIndex = pageNumber * perPage;
  // const firstProductIndex = lastProductIndex - perPage;
  // const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  useEffect(() => {
    let newPerPage = 8;

    if (isMobile) {
      newPerPage = 4;
    } else if (isTablet) {
      newPerPage = 6;
    }

    setPerPage(newPerPage);
  }, [isMobile, isTablet]);

  useEffect(() => {
    dispatch(getProducts({ page: pageNumber, per_page: perPage }));
  }, [pageNumber]);

  useEffect(() => {
    setUpdatedProductList(products);
  }, [products]);

  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }
  //   getProductsByQuery(query);
  // }, [query]);

  const handlePaginationClick = (i) => {
    setPageNumber(i);
  };

  const handleNextPageButton = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousPageButton = () => {
    setPageNumber(pageNumber - 1);
  };

  //Необходимо исправить функцию после исправления бекенда.
  const handleLastPageButton = () => {
    const lastPage = Math.ceil(products.length / perPage);
    setPageNumber(lastPage);
  };

  const handleFirstPageButton = () => {
    setPageNumber(1);
  };
  const openModal = () => {
    setShowModalFilter(true);
  };

  const closeModal = () => {
    setShowModalFilter(false);
  };

  const handleSubmit = (filter) => {
    setSearchParams({ query: filter });
    closeModal();
  };

  const openModalDelete = (code, id) => {
    setIsModalDeleteOpen(true);
    setProductCode(code);
    setProductId(id);
  };

  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
  };
  const handleChangeFilterByCode = (ev) => setFilterByCode(ev.target.value);

  const handleOnSearchButton = (code) => {
    const allProducts = dispatch(getAllProducts());
    const productByCode = allProducts.filter(el => el.productCode === code);
    if(productByCode){
      setUpdatedProductList(productByCode);
    } else {
      Notiflix.Notify.failure("Продукт з таким ім'ям не знайдено")
    }
  };

  return (
    <StyledFragment>
      {showModalFilter && (
        <ModalFilter onCloseModal={closeModal} onSubmit={handleSubmit} />
      )}
      {isModalDeleteOpen && (
        <ModalDeleteProduct
          onClose={closeModalDelete}
          code={productCode}
          id={productId}
          products={updatedProductList}
          setUpdatedProductList={setUpdatedProductList}
        />
      )}
      {isLoggedIn && (
        <StyledInputWrp>
          <StyledBtnSearch onClick={() => handleOnSearchButton(filterByCode)}>
            <AiOutlineSearch size={"1.8em"} />
          </StyledBtnSearch>
          <StyledInput
            type="text"
            placeholder="Пошук"
            value={filterByCode}
            onChange={handleChangeFilterByCode}
          />
        </StyledInputWrp>
      )}
      <StyledTitle>Каталог товарів</StyledTitle>
      {!isLoggedIn && <StyledButton onClick={() => openModal()}>
        <FiFilter size={"1.5em"} />
        Фільтрувати
      </StyledButton>}
      {products.length !== 0 && (
        <ProductList
          productsList={updatedProductList}
          onOpen={openModalDelete}
        />
      )}
      {products.length !== 0 && (
        <Pagination
          pageNumber={pageNumber}
          cardsPerPage={perPage}
          totalCards={updatedProductList.length} //исправить после исправления бекенда.
          onClick={handlePaginationClick}
          handleNextPageButton={handleNextPageButton}
          handlePreviousPageButton={handlePreviousPageButton}
          handleLastPageButton={handleLastPageButton}
          handleFirstPageButton={handleFirstPageButton}
        />
      )}
    </StyledFragment>
  );
};

export default ProductsCataloguePage;
