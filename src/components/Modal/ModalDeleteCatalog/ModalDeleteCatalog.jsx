import { GrClose } from "react-icons/gr";
import { CloseButton, ModalBody, Overlay, StyledBtnBack, StyledDiv, StyledImg, StyledP, StyledTitle} from "./ModalDeleteCatalogStyled";
import { useDispatch } from "react-redux";
import { removeCatalog } from "../../../../redux/Catalog/catalogOperations";
import lampRed from "../../../../images/Popup/lamp-red@1x.png"


const ModalDeleteCatalog = ({catalogName, catalogYear, catalogId, catalogsList,  onCloseModal, updateCatalogsList, onOpenDeleteSuccessModal}) => {
    const dispatch = useDispatch();

    const handleDelete = (catalogId) => {
       const updatedList = catalogsList.filter(catalog => catalog._id !== catalogId);
       dispatch(removeCatalog(catalogId));
       updateCatalogsList(updatedList)
       onCloseModal();
       onOpenDeleteSuccessModal();
    }
   
    return (
     <Overlay>
        <ModalBody>
            <CloseButton onClick={()=> onCloseModal()}> <GrClose/></CloseButton>
            <StyledImg src={lampRed} alt="lamp" />
            <StyledTitle>Ви певні що хочете видалити каталог</StyledTitle>
            <StyledP>{`${catalogName} ${catalogYear}?`}</StyledP>
            <StyledDiv>
            <StyledBtnBack onClick={()=> onCloseModal()} >Повернутися</StyledBtnBack>
            <StyledBtnBack onClick={()=> handleDelete(catalogId)}>Так</StyledBtnBack>
            </StyledDiv>
           
        </ModalBody>
     </Overlay>
    )
}

export default ModalDeleteCatalog