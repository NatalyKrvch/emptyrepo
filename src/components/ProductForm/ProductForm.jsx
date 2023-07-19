import { useState } from "react";
import { addProduct} from "../../redux/Product/productOperations";
import { useDispatch, useSelector} from "react-redux";
import { categoryList } from './categoryList.json'
import { BiPlusCircle } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { nanoid } from "nanoid";
import {
  FakeButton,
  FakeInputText,
  FakeInputWrp,
  FileInput,
  StyledButtonDelete,
  StyledButtonSelect,
  StyledCoverLabel,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledInputWrapper,
  StyledInputWrapperPhoto,
  StyledLabel,
  StyledList,
  StyledOptions,
  StyledWrpSelector,
  SubmitButton,
} from "./ProductFormStyled";

import AddCharacteristicInputs from "../AddCharacteristicInputs/AddCharacteristicInputs";
import { getCurrentProduct } from "../../redux/Product/productSelectors";
import { GoTriangleUp,  GoTriangleDown } from "react-icons/go"



const ProductForm = ({openModal}) => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [price, setPrice] = useState("");
  const [manufacturerCountry, setManufacturerCountry] = useState("");
  const [characteristicArray, setCharacteristicArray] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [productImages, setProductImages] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [productImagesUrl, setProductImagesUrl] = useState([]);
  const [category, setCategory] = useState ('');
  const [isOpen, setIsOpen] = useState(false);
  console.log(category);


  const dispatch = useDispatch();
  const addedProduct = useSelector(getCurrentProduct);


  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductCodeChange = (event) => {
    setProductCode(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleManufacturerCountryChange = (event) => {
    setManufacturerCountry(event.target.value);
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImageUrl(URL.createObjectURL(file));
    setCoverImage(file);
  };

  const handleProductImagesChange = (event) => {
    const files = event.target.files;
    const productImagesAdded = Array.from(files); 
    setProductImages((p)=> [...p, ...productImagesAdded]);
    const urlArray = [...files].map(file => URL.createObjectURL(file))
    setProductImagesUrl((p)=> [...p, ...urlArray]);
  };


  const handleDeleteCoverImg = () => {
    setCoverImage(null);
    setCoverImageUrl('');
    URL.revokeObjectURL(coverImageUrl);
  };

  const handleDeletePhotoImg = (url) => {
    const newProductImages = productImages.filter(card=> card !== url)
    setProductImages(newProductImages);
    const newProductImagesUrl = productImagesUrl.filter((card) => card !== url);
    URL.revokeObjectURL(url);
    setProductImagesUrl(newProductImagesUrl);

  };

  // const handleCategoryChange = ev => {
  //   setCategory(ev.target.value)
  // }

  const handleOptionClick = (selectedOption) => {
    if (selectedOption !== category) {
      setCategory(selectedOption);
      setIsOpen(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();    
    const additionalAttributes = characteristicArray.map((obj) => {
      console.log(obj);
      return { name: obj.name, value: obj.value };
    });
    
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productCode", productCode);
    formData.append("productPrice", price);
    formData.append("productCountry", manufacturerCountry);
    formData.append("productCoverURL", coverImage || "");
    if(productImages){
      productImages.forEach((file) => {
        formData.append("productPhotoURL", file);
      });
    }
    formData.append("additionalAttributes", JSON.stringify(additionalAttributes));
    dispatch(addProduct(formData));
    openModal();
    setProductName("");
    setProductCode("");
    setPrice("");
    setManufacturerCountry("");
    setCoverImage(null);
    setProductImages([]);
    setCharacteristicArray([]);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <StyledLabel htmlFor="name">Назва товару</StyledLabel>
        <StyledInput
          id="name"
          type="text"
          pattern="[a-zA-Zа-яА-ЯґҐєЄіІїЇёЁ\s]*"
          title="Будь-ласка вводьте літери англійського чи українського алфавіту"
          minLength={3}
          maxLength={16}
          required
          value={productName}
          onChange={handleProductNameChange}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="article">Артикул</StyledLabel>
        <StyledInput
          id="article"
          type="text"
          pattern="^\d+(\.\d{1,2})?$"
          title="Будь-ласка введіть числовий формат (наприклад, 100 або 1099)"
          required
          value={productCode}
          onChange={handleProductCodeChange}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="price">Ціна</StyledLabel>
        <StyledInput
          id="price"
          type="text"
          pattern="^\d+(\.\d{1,2})?$"
          title="Будь-ласка введіть числовий формат ціни (наприлад, 10 або 10.99)"
          required
          value={price}
          onChange={handlePriceChange}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="country">Країна походження</StyledLabel>
        <StyledInput
          id="country"
          type="text"
          pattern="[a-zA-Zа-яА-ЯґҐєЄіІїЇёЁ\s]*"
          title="Будь-ласка введіть літери англійсього чи українського алфавіту"
          required
          value={manufacturerCountry}
          onChange={handleManufacturerCountryChange}
        />
      </StyledInputWrapper>
      <StyledWrpSelector>
      <StyledLabel htmlFor="country">Оберіть категорію</StyledLabel>
      <StyledButtonSelect onClick={() => setIsOpen(!isOpen)}>{category || "---------"} {isOpen ? <GoTriangleUp/> : <GoTriangleDown/>}</StyledButtonSelect>
        {isOpen && (<StyledList>
         { categoryList.map(el=> {
          <StyledOptions onClick={()=> handleOptionClick(`${el}`)}>{el}</StyledOptions>
         })}
          </StyledList>)}
      </StyledWrpSelector>
      {characteristicArray.map(({_id, name, value}) => {
        console.log(_id, name, value)
       return  <AddCharacteristicInputs
          key={_id}
          id={_id}
          name={name}
          value={value}
          characteristicArray={characteristicArray}
          setCharacteristicArray={setCharacteristicArray}
          
        />
      })}
      <FakeInputWrp>
        <FakeInputText>Додати характеристику</FakeInputText>
        <FakeButton
          type="button"
          onClick={() => {
            const id = nanoid();
            setCharacteristicArray((prevState) => {
              return [...prevState, { _id: id, name: '', value: '' }];
            });
            return;
          }}
        >
          <BiPlusCircle size={"1.5em"} />
        </FakeButton>
      </FakeInputWrp>

      {coverImage === null ? (
        <label>
          <FileInput
            type="file"
            onChange={handleCoverImageChange}
            accept=".jpg, .jpeg"
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
          <StyledImg src={coverImageUrl} alt="cover" />
          <StyledInput
            id="name"
            type="text"
            value={`Cover_${productName}.jpeg`}
            onChange={handleCoverImageChange}
          />
          <StyledButtonDelete type="button " onClick={handleDeleteCoverImg}>
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </StyledButtonDelete>
        </StyledInputWrapper>
      )}
      {productImages.length === 0 ? (
        <label>
          <FileInput
            type="file"
            multiple
            onChange={handleProductImagesChange}
            accept=".jpg, .jpeg"
          />
          <FakeInputWrp>
            <FakeInputText>Додати зображення</FakeInputText>
            <FakeButton>
              <BiPlusCircle size={"1.5em"} />
            </FakeButton>
          </FakeInputWrp>
        </label>
      ) : (
       <>
        <ul>
      { productImagesUrl.map((photo, index) => 
        (<StyledInputWrapperPhoto key={photo}>
          <StyledCoverLabel htmlFor="">Назва зображення</StyledCoverLabel>
          <StyledImg src={photo} alt="photo" />
          <StyledInput type="text" value={`${index+1}.jpeg`} readOnly />
          <StyledButtonDelete 
          onClick={()=> handleDeletePhotoImg(photo)}>
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </StyledButtonDelete>
        </StyledInputWrapperPhoto>
        ))}
      </ul>
         <label>
         <FileInput
           type="file"
           multiple
           onChange={handleProductImagesChange}
           accept=".jpg, .jpeg"
         />
         <FakeInputWrp>
           <FakeInputText>Додати зображення</FakeInputText>
           <FakeButton>
             <BiPlusCircle size={"1.5em"} />
           </FakeButton>
         </FakeInputWrp>
       </label>
       </>
      )}
      <SubmitButton type="submit"
      disabled={(!productName || !productCode || !price || !manufacturerCountry)}
      >Зберегти</SubmitButton>
    </StyledForm>
  );
};

export default ProductForm;
