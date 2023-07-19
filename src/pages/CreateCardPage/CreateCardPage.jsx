import ProductForm from "../../components/ProductForm/ProductForm";
import CatalogForm from "../../components/CatalogForm/CatalogForm";
import {  useSelector } from "react-redux";
import { selectFilter } from "../../redux/Filter/selectors";
import { StyledFragment, StyledTitle, TitleWrp } from "./CreateCardPageStyled";
import DropdownCardSelector from "../../components/DropdownCardSelect/DropdownCardSelect";
import ModalCreateProductCard from "../../components/Modal/ModalChangeCatalog/ModalCreateProductCard/ModalCreateProductCard";
import { useState } from "react";
import { getCurrentProduct } from "../../redux/Product/productSelectors";
import { useNavigate } from "react-router-dom";


const CreateCardPage = () => {

  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  const navigate = useNavigate();

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
    navigate((filter === "Картка товару") ? "/" : "/preordercatalogue");
  };


  const filter = useSelector(selectFilter);
  
  return (
    <StyledFragment>
      <TitleWrp>
        <StyledTitle>Створити картку</StyledTitle>
      </TitleWrp>
      <DropdownCardSelector />
    {filter === "Картка товару" &&  <ProductForm openModal={onOpenModal}/> }
    {filter === "Картка каталогу" &&  <CatalogForm openModal={onOpenModal}/> }
    {showModal && 
    <ModalCreateProductCard 
    onCloseModal={onCloseModal} 
    title={(filter === "Картка товару") ? "Картка успішно створена" : "Картка каталогу успішно створена"}
    filter={filter}/>}
    </StyledFragment>
  )
}

export default CreateCardPage;