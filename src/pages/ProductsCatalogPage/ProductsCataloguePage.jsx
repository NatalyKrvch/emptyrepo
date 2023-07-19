import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import {
  StyledBtnDeleteSearch,
  StyledBtnSearch,
  StyledButton,
  StyledFragment,
  StyledInput,
  StyledInputWrp,
  StyledTitle,
} from "./ProductsCataloguePageStyled";
import { FiFilter } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx"
import { useEffect } from "react";
import { useState } from "react";
import { getAllProducts, getTotalItems } from "../../redux/Product/productSelectors";
import { getProducts } from "../../redux/Product/productOperations";
import Pagination from "../../components/Pagination/Pagination";
import { useMediaRules } from "../../hooks/useMediaRules";
import ModalFilter from "../../components/Modal/ModalChangeCatalog/ModalFilter/ModalFilter";
import { useSearchParams } from "react-router-dom";
import ModalDeleteProduct from "../../components/Modal/ModalChangeCatalog/ModalDeleteProduct/ModalDeleteProduct";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { AiOutlineSearch } from "react-icons/ai";
import Notiflix from "notiflix";
import ModalDeleteSuccess from "../../components/Modal/ModalDeleteSuccess/ModalDeleteSuccess";
import { Portal } from "../../components/Modal/Portal/Portal";

const ProductsCataloguePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [modalDeleteSuccessOpen, setModalDeleteSuccessOpen] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [productId, setProductId] = useState("");
  const [updatedProductList, setUpdatedProductList] = useState([]);
  const [filterByCode, setFilterByCode] = useState("");
  


  const { isMobile, isTablet } = useMediaRules();
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const pageQty = useSelector(getTotalItems)
  console.log(products);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const query = searchParams.get("query");
  const article = searchParams.get("article");

  const isLoggedIn = useSelector(getIsLoggedIn);
 

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
    dispatch(getProducts({ 
      page: pageNumber,
      per_page: perPage, 
      article, 
      filter: query}));
  }, [pageNumber, perPage, article, query]);

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

  const handleDeleteSuccessModal = () => {
     setModalDeleteSuccessOpen(!modalDeleteSuccessOpen);
  };

  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
  };
  const handleChangeFilterByCode = (ev) => setFilterByCode(ev.target.value);

  // const handleOnSearchButton = (code) => {
  //   const allProducts = dispatch(getAllProducts());
  //   const productByCode = allProducts.filter(el => el.productCode === code);
  //   if(productByCode){
  //     setUpdatedProductList(productByCode);
  //   } else {
  //     Notiflix.Notify.failure("Продукт з таким ім'ям не знайдено")
  //   }
  // };

  return (
    <StyledFragment>
      {showModalFilter && (
        <ModalFilter onCloseModal={closeModal} onSubmit={handleSubmit} />
      )}
      {isModalDeleteOpen && (
        <Portal>
          <ModalDeleteProduct
            onClose={closeModalDelete}
            code={productCode}
            id={productId}
            products={updatedProductList}
            setUpdatedProductList={setUpdatedProductList}
            onOpenDeleteSuccessModal={handleDeleteSuccessModal}
          />
        </Portal>
      )}
      {modalDeleteSuccessOpen && (
        <ModalDeleteSuccess
          onClose={handleDeleteSuccessModal}
          title={"Картка успішно видалена"}
        />
      )}
      {isLoggedIn && (
        <StyledInputWrp>
          <StyledBtnSearch onClick={()=> {
            setSearchParams({article: filterByCode });
        }}>
            <AiOutlineSearch size={"1.8em"} />
          </StyledBtnSearch>
          <StyledInput
            type="text"
            placeholder="Пошук"
            value={filterByCode}
            onChange={handleChangeFilterByCode}
          />
          { filterByCode && 
          <StyledBtnDeleteSearch onClick={() => {
            setSearchParams({});
            setFilterByCode('')}}>
            <RxCrossCircled size={'1.5em'}/>
          </StyledBtnDeleteSearch> }
        </StyledInputWrp>
      )}
      <StyledTitle>Каталог товарів</StyledTitle>
      {!isLoggedIn && (
        <StyledButton onClick={!query? () => openModal() : () => setSearchParams({})}>
         {!query && <FiFilter size={"1.5em"} />}
         {query? `${query}` : 'Фільтрувати'}
         {query && <RxCrossCircled/> }
        </StyledButton>
      )}
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
