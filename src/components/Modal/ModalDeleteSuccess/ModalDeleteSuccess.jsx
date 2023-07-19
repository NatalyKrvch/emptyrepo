import lampRed from "../../../images/Popup/lamp-red@1x.png"
import { GrClose } from "react-icons/gr";
import { CloseButton, ModalBody, Overlay,  StyledImg, StyledTitle } from "./ModalDeleteSuccessStyled";

const ModalDeleteSuccess = ({onClose, title}) => {
    return (
        <Overlay>
           <ModalBody>
               <CloseButton onClick={()=> onClose()}> <GrClose/></CloseButton>
               <StyledImg src={lampRed} alt="lamp" />
               <StyledTitle>{title}</StyledTitle> 
           </ModalBody>
        </Overlay>
       )
}

export default ModalDeleteSuccess;