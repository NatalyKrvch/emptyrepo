import { useMediaRules } from "../../hooks/useMediaRules";
import {
  StyledButton,
  StyledFragment,
  StyledLi,
  StyledReactIconNext,
  StyledReactIconPrevious,
  StyledReactIconSkipPrevious,
  StyledReactIconTrackNext,
  StyledUl,
} from "./PaginationStyled";

const Pagination = ({
  pageNumber,
  cardsPerPage,
  totalCards,
  onClick,
  handleNextPageButton,
  handlePreviousPageButton,
  handleLastPageButton,
  handleFirstPageButton,
}) => {

  const { isMobile, isTablet, isDesktop } = useMediaRules();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  const lastPage = Math.ceil(totalCards / cardsPerPage);

  let visiblePages;
  if (isMobile) {
    const totalVisiblePages = 3;
    const currentPageIndex = pageNumber - 1;
  
    if (lastPage <= totalVisiblePages) {
      visiblePages = pageNumbers;
    } else if (currentPageIndex < 1) {
      visiblePages = pageNumbers.slice(0, 2);
      visiblePages.push("...");
    } else if (currentPageIndex > lastPage - 2) {
      visiblePages = ["..."];
      visiblePages.push(...pageNumbers.slice(lastPage - 2, lastPage));
    } else {
      visiblePages = [currentPageIndex];
      visiblePages.push(...pageNumbers.slice(currentPageIndex + 1, currentPageIndex + 3));
      visiblePages.push("...");
    }
  } else if (isTablet || isDesktop) {
    const totalVisiblePages = 7;
    const currentPageIndex = pageNumber - 1;

    if (lastPage <= totalVisiblePages) {
      visiblePages = pageNumbers;
    } else if (currentPageIndex < totalVisiblePages - 2) {
      visiblePages = pageNumbers.slice(0, totalVisiblePages - 1);
      visiblePages.push("...");
    } else if (currentPageIndex > lastPage - totalVisiblePages + 1) {
      visiblePages = ["..."];
      visiblePages.push(...pageNumbers.slice(lastPage - totalVisiblePages + 2, lastPage + 1));
    } else {
      visiblePages.push(...pageNumbers.slice(currentPageIndex - 1, currentPageIndex + 2));
      visiblePages.push("...");
    }
  }


  return (
    <StyledFragment>
      <StyledButton onClick={() => handleFirstPageButton()}>
        <StyledReactIconSkipPrevious
          disabled={pageNumber === 1}
          size={"1.5em"}
        />
      </StyledButton>
      <StyledButton onClick={() => handlePreviousPageButton()} disabled={pageNumber === 1}>
        <StyledReactIconPrevious disabled={pageNumber === 1}  size={"1.5em"} color={"inherit"} />  
      </StyledButton>
      <StyledUl>
        {visiblePages[0] > 1 && (
          <StyledLi onClick={() => onClick(1)}>1</StyledLi>
        )}
        {visiblePages[0] > 2 && <StyledLi disabled>...</StyledLi>}
        {visiblePages.map((page) => (
          <StyledLi
            key={page}
            onClick={() => onClick(page)}
            active={pageNumber === page}
          >
            {page}
          </StyledLi>
        ))}
        {visiblePages[visiblePages.length - 1] < lastPage - 1 && (
          <StyledLi disabled>...</StyledLi>
        )}
        {visiblePages[visiblePages.length - 1] < lastPage && (
          <StyledLi onClick={() => onClick(lastPage)}>{lastPage}</StyledLi>
        )}
      </StyledUl>
      <StyledButton onClick={() => handleNextPageButton()} disabled={pageNumber === lastPage} >
        <StyledReactIconNext
          disabled={pageNumber === lastPage}
          size={"1.5em"}
          color={"inherit"} 
        />
      </StyledButton>
      <StyledButton onClick={() => handleLastPageButton()} >
        <StyledReactIconTrackNext
          disabled={pageNumber === lastPage}
          size={"2em"}
        />
      </StyledButton>
    </StyledFragment>
  );
};

export default Pagination;
