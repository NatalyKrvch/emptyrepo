import { useParams } from "react-router";
import { getAllCatalogs } from "../../redux/Catalog/catalogSelectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FakeButton, FakeButtonDownload, FakeInputText, FakeInputWrp, FakeInputWrpDownload, FileInput, StyledButtonDelete, StyledCoverLabel, StyledDiv, StyledForm, StyledImg, StyledInput, StyledInputWrapper, StyledLabel, StyledP, StyledTitle, SubmitButton } from "./EditCatalogueCardPageStyled";
import { BiPlusCircle } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiArrowUpTray } from "react-icons/hi2";
import { changeCatalog } from "../../redux/Catalog/catalogOperations";
import { useEffect, useState } from "react";
import ModalChangeCatalog from "../../components/Modal/ModalChangeCatalog/ModalChangeCatalog/ModalChangeCatalog";

const  EditCatalogueCard = () =>  {
  const { id } = useParams();
  const catalogsList = useSelector(getAllCatalogs);
  const currentCatalog = catalogsList.find(catalog => catalog._id === id)
  console.log(currentCatalog);
  

  const [name, setCatalogName] = useState(currentCatalog?.catalogName || "");
  const [year, setYear] = useState(currentCatalog?.catalogYear || "");
  // const [coverImage, setCoverImage] = useState(currentCatalog?.catalogCoverURL || null);
  const [coverImageUrl, setCoverImageUrl] = useState(currentCatalog?.catalogCoverURL || "");
  const [catalogFile, setCatalogFile] = useState(currentCatalog?.catalogFileURL || "");
  const [showModal, setShowModal] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    setCatalogName(currentCatalog?.catalogName || "");
    setYear(currentCatalog?.catalogYear || "");
    setCoverImageUrl(currentCatalog?.catalogCoverURL || null);
    setCatalogFile("");
  }, [currentCatalog]);



  const handleCatalogNameChange = (event) => {
    setCatalogName(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImageUrl(URL.createObjectURL(file));
  };

  const handleDeleteCoverImg = () => {
    setCoverImageUrl("");
    URL.revokeObjectURL(coverImageUrl);
  };

  const handleCatalogImagesDownload = (event) => {
    console.log(event.target.files);
    const files = event.target.files;
    setCatalogFile(files);
  };
 

  const closeModal = () => {
    setShowModal(false);
    navigate('/preordercatalogue');
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("catalogName", name);
    formData.append("catalogYear", year);
    formData.append("catalogCoverURL", coverImageUrl || "");
    formData.append("catalogFileURL", catalogFile);
    console.log(formData);

    dispatch(changeCatalog(formData));

    setCatalogName("");
    setYear("");
    setCoverImageUrl(null);
    setCatalogFile("");
    setShowModal(true);
  };
 


  return (
   <StyledDiv>
     <StyledTitle>Редагувати картку товару</StyledTitle>
     <StyledP>{name}</StyledP>
     <StyledP>{year}</StyledP>
     <StyledForm action="" onSubmit={handleSubmit}>
     {!coverImageUrl ? (
        <label>
          <FileInput
            type="file"
            required
            onChange={handleCoverImageChange}
            accept=".jpeg, .jpg"
            value={coverImageUrl}
          />
          <FakeInputWrp>
            <FakeInputText>Додати обкладинку</FakeInputText>
            <FakeButton type="button">
              <BiPlusCircle size={"1.5em"} />
            </FakeButton>
          </FakeInputWrp>
        </label>
      ) : (
        <StyledInputWrapper>
          <StyledCoverLabel htmlFor="name">Назва обкладинки</StyledCoverLabel>
          <StyledImg src={coverImageUrl}  alt="cover" />
          <StyledInput
            id="name"
            type="text"
            onChange={handleCoverImageChange}
            value={`Cover_${name}.jpeg`}
            readOnly
          />
          <StyledButtonDelete type="button " >
            <RiDeleteBin6Line size={"1.8em"} color="white" onClick={handleDeleteCoverImg} />
          </StyledButtonDelete>
        </StyledInputWrapper>
      )}
       <StyledInputWrapper>
        <StyledLabel htmlFor="catalogName">Назва каталогу</StyledLabel>
        <StyledInput
          type="text"
          name="catalogName"
          required
          pattern="/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/"
          title="Name may contain only letters, apostrophe, dash and spaces."
          onChange={handleCatalogNameChange}
          value={name}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="year">Рік</StyledLabel>
        <StyledInput type="text" name="year" onChange={handleYearChange}  value={year}/>
      </StyledInputWrapper>
      <label>
        <FileInput
          type="file"
          onChange={handleCatalogImagesDownload}
          accept=".pdf"
        />
        <FakeInputWrpDownload>
          <FakeButtonDownload>
            <HiArrowUpTray size={"1.5em"} />
          </FakeButtonDownload>
          <FakeInputText>Завантажити каталог</FakeInputText>
        </FakeInputWrpDownload>
      </label>
      <SubmitButton
        type="submit"
        disabled={
          !name || !year || !coverImageUrl 
        }
      >
        Зберегти
      </SubmitButton>
      </StyledForm>
      {showModal && <ModalChangeCatalog  onCloseModal={closeModal}/>}
   </StyledDiv>
  )
}

export default EditCatalogueCard;
