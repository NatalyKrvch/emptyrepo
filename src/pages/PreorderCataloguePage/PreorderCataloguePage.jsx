import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import CatalogsList from "../../components/CatalogsList/CatalogsList";
import { useEffect, useState } from "react";
import {
  getCatalogs,
  removeCatalog,
} from "../../redux/Catalog/catalogOperations";
import { getAllCatalogs } from "../../redux/Catalog/catalogSelectors";
import {
  STyledContainer,
  StyledBtnSearch,
  StyledDiv,
  StyledH2,
  StyledInput,
  StyledInputWrp,
} from "./PreoderCataloguePageStyled";
import { AiOutlineSearch } from "react-icons/ai";
import ModalDeleteCatalog from "../../components/Modal/ModalChangeCatalog/ModalDeleteCatalog/ModalDeleteCatalog";
import Notiflix from 'notiflix';
import Pagination from "../../components/Pagination/Pagination";
import { useMediaRules } from "../../hooks/useMediaRules";

const PreorderCataloguePage = () => {
  const [fetchedCatalogsList, setFetchedCatalogsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [catalogName, setCatalogName] = useState("");
  const [catalogYear, setCatalogYear] = useState("");
  const [catalogId, setCatalogId] = useState("");
  const [filter, setFilter] = useState("");
  
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const catalogsList = useSelector(getAllCatalogs);
  const { isMobile, isTablet} = useMediaRules();
//   const lastCatalogIndex = pageNumber * perPage;
//   const firstCatalogIndex = lastCatalogIndex - perPage;
//   const currentCatalogs = fetchedCatalogsList.slice(firstCatalogIndex, firstCatalogIndex);
//  console.log(fetchedCatalogsList);

  useEffect(() => {
    dispatch(getCatalogs({ page: pageNumber, per_page: perPage }));
  }, [pageNumber]);

  useEffect(() => {
    setFetchedCatalogsList(catalogsList);
  }, [catalogsList]);

  const updateCatalogsList = (updatedList) => {
    setFetchedCatalogsList(updatedList);
  };

  console.log(catalogsList);
  console.log(fetchedCatalogsList);

  useEffect(() => {
    let newPerPage = 8; 

    if (isMobile) {
      newPerPage = 4;
    } else if (isTablet) {
      newPerPage = 6;
    }

    setPerPage(newPerPage);
  }, [isMobile, isTablet]);


  const openModal = (name, year, id) => {
    setShowModal(true);
    setCatalogName(name);
    setCatalogYear(year);
    setCatalogId(id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDeleteCatalog = (id) => {
    dispatch(removeCatalog(id));
    catalogsList.filter((catalog) => catalog._id !== id);
  };

  const handleFilterCatalog = (ev) => {
    setFilter(ev.target.value);
  };

  const handleOnSearchButton = (name) => {
    const filteredCatalog = fetchedCatalogsList.find(
      (catalog) => catalog.catalogName === name
    );
    if (filteredCatalog) {
      setFetchedCatalogsList([filteredCatalog]);
      setFilter('');
    }
    else {Notiflix.Notify.failure("Каталог з таким ім'ям не знайдено")}
    return;
  };

  const handlePaginationClick = (i) => {
    setPageNumber(i);
  };

  const handleNextPageButton = () => {
    setPageNumber(pageNumber + 1)
  };

  const handlePreviousPageButton = () => {
    setPageNumber(pageNumber - 1)
  };

  
  //Необходимо заменит функцию после исправления бекенда  на запрос всех каталогов, без пагинации
  const handleLastPageButton = () => {
    const lastPage = Math.ceil(fetchedCatalogsList.length / perPage);
    setPageNumber(lastPage);
  };

  const handleFirstPageButton = () => {
    setPageNumber(1);
  }

  return (
    <STyledContainer>
      <StyledDiv>
        {isLoggedIn && (
          <StyledInputWrp>
            <StyledBtnSearch onClick={() => handleOnSearchButton(filter)}>
              <AiOutlineSearch size={"1.8em"} />
            </StyledBtnSearch>
            <StyledInput
              type="text"
              placeholder="Пошук"
              value={filter}
              onChange={handleFilterCatalog}
            />
          </StyledInputWrp>
        )}
        <StyledH2>Каталоги для передзамовлення</StyledH2>
        <CatalogsList
          catalogsList={fetchedCatalogsList}
          onDelete={handleDeleteCatalog}
          onOpenModal={openModal}
          closeModal={closeModal}
        />
      </StyledDiv>
      {showModal && (
        <ModalDeleteCatalog
          catalogName={catalogName}
          catalogYear={catalogYear}
          catalogId={catalogId}
          onCloseModal={closeModal}
          catalogsList={fetchedCatalogsList}
          updateCatalogsList={updateCatalogsList}
        />
      )}
      {catalogsList !== 0  && 
      <Pagination 
      pageNumber={pageNumber}
      cardsPerPage={perPage}
      totalCards={fetchedCatalogsList.length} 
      onClick={handlePaginationClick}
      handleNextPageButton={handleNextPageButton}
      handlePreviousPageButton={handlePreviousPageButton}
      handleLastPageButton={handleLastPageButton}
      handleFirstPageButton={handleFirstPageButton}/> }  
    </STyledContainer>
  );
};

export default PreorderCataloguePage;
