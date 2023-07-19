import { GrClose } from "react-icons/gr";
import lampYellow from "../../../../images/Popup/lamp-yellow@1x.png" 
import { useNavigate } from "react-router-dom";
import { CloseButton, ModalBody, Overlay, StyledImg, StyledTitle, SubmitButtonQRCode } from "./ModalCreateProductCardStyled";

const ModalCreateProductCard = ({title, onCloseModal, filter}) => {
    const navigate = useNavigate();

    return (
        <Overlay>
        <ModalBody>
            <CloseButton onClick={()=> onCloseModal()}> <GrClose/></CloseButton>
            <StyledImg src={lampYellow} alt="lamp" />
            <StyledTitle>{title}</StyledTitle>  
            {(filter === "Картка товару") && <SubmitButtonQRCode onClick={()=> navigate('/qrcodegeneration')}>QR Code</SubmitButtonQRCode>}   
        </ModalBody>
     </Overlay>
    )
}

export default ModalCreateProductCard