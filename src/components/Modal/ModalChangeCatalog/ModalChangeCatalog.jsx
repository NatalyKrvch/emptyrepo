import { CloseButton, ModalBody, Overlay, StyledImg, StyledTitle } from "./ModalChangeCatalogStyled"
import { GrClose } from "react-icons/gr";
import lampYellow from "../../../../images/Popup/lamp-yellow@1x.png" 



const ModalChangeCatalog = ({onCloseModal}) => {
   

    return (
        <Overlay>
        <ModalBody>
            <CloseButton onClick={()=> onCloseModal()}> <GrClose/></CloseButton>
            <StyledImg src={lampYellow} alt="lamp" />
            <StyledTitle>Картка каталогу успішно змінена</StyledTitle>     
        </ModalBody>
     </Overlay>
    )
}

export default ModalChangeCatalog