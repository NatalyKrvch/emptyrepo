import Raiting from "../../components/Raiting/Raiting";
import {
  StyledH1,
  PageWrapper,
  StyledP,
  StyledTextarea,
  StyledButton,
  StyledForm,
} from "./FeedbackPageStyled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../redux/Review/reviewOperations";
import { getCurrentReviews } from "../../redux/Review/reviewSelectors";
// import emailjs from "emailjs-com";

function Feedback() {
  // const serviceID = import.meta.env.VITE_SERVICEID;
  // const templateID = import.meta.env.VITE_TEMPLATEID;
  // const keyID = import.meta.env.VITE_KEYID;

  const [feedback, setFeedback] = useState("");
  const [selectedStars, setSelectedStars] = useState([]);
  const [isTextareaEmpty, setIsTextareaEmpty] = useState(false);

  const currentReview = useSelector(getCurrentReviews);
  console.log(currentReview);

  const currentReviewDate = currentReview?.lastDate;
  console.log(currentReviewDate);

  const maxChar = 500;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFeedback(e.target.value);
    setIsTextareaEmpty(false);
  };

  const handleSelectedStars = (stars) => {
    setSelectedStars(stars);
  };

  const mark = selectedStars[selectedStars.length - 1];

  const review = {
    reviewMark: mark,
    reviewText: feedback,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.trim() === "") {
      setIsTextareaEmpty(true);
      return;
    }

    // if (currentReview !== null) {
    //   alert("Ви вже надіслали відгук, дякуємо");
    //   return;
    // }

    dispatch(addReview(review));

    // emailjs
    //   .send(
    //     serviceID,
    //     templateID,
    //     {
    //       from_name: "Svit Svitla Web-service",
    //       from_email: "nataly.krvch@gmail.com",
    //       message: JSON.stringify(review),
    //     },
    //     keyID
    //   )
    //   .then((response) => {
    //     console.log(
    //       "Повідомлення успішно надіслано!",
    //       response.status,
    //       response.text
    //     );
    //   })
    //   .catch((error) => {
    //     console.error("Помилка під час відправки повідомлення:", error);
    //   });
    setFeedback("");
    setSelectedStars([]);
  };

  const isButtonDisabled =
    typeof selectedStars === "undefined" || selectedStars < 1;

  return (
    <>
      <PageWrapper>
        <StyledH1>Залиште відгук тут</StyledH1>
        <StyledP>Як вам було у Світі світла?</StyledP>
        <Raiting
          onSelectedStars={handleSelectedStars}
          selectedStars={selectedStars}
        />
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextarea
            onChange={handleChange}
            value={feedback}
            type="text"
            placeholder="Ваші враження"
            id="feedback"
            maxLength={maxChar}
            isTextareaEmpty={isTextareaEmpty}
          />
          {isTextareaEmpty && (
            <p style={{ color: "#B3261E" }}>
              Будь ласка, заповніть поле відгуку
            </p>
          )}
          <StyledButton
            type="submit"
            onSubmit={handleSubmit}
            disabled={isButtonDisabled}
          >
            Надіслати
          </StyledButton>
        </StyledForm>
      </PageWrapper>
    </>
  );
}

export default Feedback;
