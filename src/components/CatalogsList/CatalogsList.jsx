import CatalogCard from "../CatalogCard/CatalogCard";
import { StyledUl } from "./CatalogsListStyled";

const CatalogsList = ({ catalogsList, onDelete, onOpenModal }) => {
  return (
    <StyledUl>
      {catalogsList.map((catalog) => (
        <li key={catalog._id}>
          <CatalogCard
            catalog={catalog}
            onDelete={onDelete}
            onOpenModal={onOpenModal}
          />
        </li>
      ))}
    </StyledUl>
  );
};

export default CatalogsList;
