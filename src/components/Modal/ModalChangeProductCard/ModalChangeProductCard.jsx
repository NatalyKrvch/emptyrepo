import { GrClose } from "react-icons/gr";
import lampYellow from "../../../../images/Popup/lamp-yellow@1x.png" 
import { CloseButton, ModalBody, Overlay, StyledImg, StyledTitle, SubmitButtonQRCode } from "./ModalChangeProductCardStyled";
import { useNavigate } from "react-router-dom";


const ModalChangeProductCard = ({onCloseModal}) => {
    const navigate = useNavigate();

    return (
        <Overlay>
        <ModalBody>
            <CloseButton onClick={()=> onCloseModal()}> <GrClose/></CloseButton>
            <StyledImg src={lampYellow} alt="lamp" />
            <StyledTitle>Картка успішно змінена</StyledTitle>  
            <SubmitButtonQRCode onClick={()=> navigate('/qrcodegeneration')}>QR Code</SubmitButtonQRCode>   
        </ModalBody>
     </Overlay>
    )
}

export default ModalChangeProductCard