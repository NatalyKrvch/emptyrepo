import { GrClose } from "react-icons/gr";
import { CloseButton, ModalBody, Overlay, StyledBtnBack, StyledDiv, StyledImg, StyledP, StyledTitle} from "./ModalDeleteProductStyled";
import { useDispatch } from "react-redux";

import lampRed from "../../../../images/Popup/lamp-red@1x.png"
import { removeProduct } from "../../../../redux/Product/productOperations";


const ModalDeleteProduct = ({onClose, code, id, products, setUpdatedProductList}) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
       const updatedList = products.filter(el => el._id !== id);
       dispatch(removeProduct(id));
       setUpdatedProductList(updatedList)
       onClose();
    }
   
    return (
     <Overlay>
        <ModalBody>
            <CloseButton onClick={()=> onClose()}> <GrClose/></CloseButton>
            <StyledImg src={lampRed} alt="lamp" />
            <StyledTitle>Ви певні що хочете видалити каталог</StyledTitle>
            <StyledP>{`${code}?`}</StyledP>
            <StyledDiv>
            <StyledBtnBack onClick={()=> onClose()} >Повернутися</StyledBtnBack>
            <StyledBtnBack onClick={()=> handleDelete(id)}>Так</StyledBtnBack>
            </StyledDiv>
           
        </ModalBody>
     </Overlay>
    )
}

export default ModalDeleteProduct