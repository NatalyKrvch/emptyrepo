import { useState } from "react";
import {
  FakeButton,
  FakeButtonDownload,
  FakeInputText,
  FakeInputWrp,
  FakeInputWrpDownload,
  FileInput,
  StyledButtonDelete,
  StyledCoverLabel,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  SubmitButton,
} from "./CatalogFormStyled";
import { useDispatch } from "react-redux";
import { HiArrowUpTray } from "react-icons/hi2";
import { addCatalog } from "../../redux/Catalog/catalogOperations";
import { BiPlusCircle } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const CatalogForm = () => {
  const [catalogName, setCatalogName] = useState("");
  const [year, setYear] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [catalogFile, setCatalogFile] = useState("");
 
  const dispatch = useDispatch();

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImageUrl(URL.createObjectURL(file));
    setCoverImage(file);
  };

  const handleCatalogNameChange = (event) => {
    setCatalogName(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("catalogName", catalogName);
    formData.append("catalogYear", year);
    formData.append("catalogCoverURL", coverImage || "");
    formData.append("catalogFileURL", catalogFile);

    dispatch(addCatalog(formData));

    setCatalogName("");
    setYear("");
    setCoverImage(null);
    setCoverImageUrl("")
    URL.revokeObjectURL(coverImageUrl);
    setCatalogFile("");
  };

  const handleDeleteCoverImg = () => {
    setCoverImage(null);
    setCoverImageUrl('');
    URL.revokeObjectURL(coverImageUrl);
  };

  const handleCatalogImagesDownload = (event) => {
    console.log(event.target.files);
    const files = event.target.files[0];
    setCatalogFile(files);
  };

  return (
    <StyledForm action="" onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <StyledLabel htmlFor="catalogName">Назва каталогу</StyledLabel>
        <StyledInput
          type="text"
          name="catalogName"
          required
          pattern="[a-zA-Zа-яА-ЯґҐєЄіІїЇёЁ\s]*"
          title="Будь-ласка вводьте літери англійського чи українського алфавіту"
          value={catalogName}
          onChange={handleCatalogNameChange}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="year" >Рік</StyledLabel>
        <StyledInput type="text" name="year"  pattern="^\d{4}$"
        value={year} onChange={handleYearChange} />
      </StyledInputWrapper>
      {coverImage === null ? (
        <label>
          <FileInput
            type="file"
            required
            onChange={handleCoverImageChange}
            accept=".jpeg, .jpg"

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
          />
          <StyledButtonDelete type="button " onClick={handleDeleteCoverImg}>
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </StyledButtonDelete>
        </StyledInputWrapper>
      )}
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
          !catalogName || !year || !coverImage 
        }
      >
        Зберегти
      </SubmitButton>
    </StyledForm>
  );
};

export default CatalogForm;
