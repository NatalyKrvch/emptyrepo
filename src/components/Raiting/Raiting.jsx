import { StarsContainer } from "./RaitingStyled";
import Sprite from "../../images/symbol-defs.svg";
import { useMediaRules } from "../../hooks/useMediaRules";
import PropTypes from "prop-types";

function Raiting(props) {
  const { onSelectedStars, selectedStars } = props;

  const { isTablet, isDesktop } = useMediaRules();
  const starCounter = [1, 2, 3, 4, 5];

  let starSize = 36;
  if (isDesktop || isTablet) {
    starSize = 48;
  }

  const handleStarClick = (starKey) => {
    const clickedIndex = starCounter.indexOf(+starKey);
    const selectedStarsArr = starCounter.slice(0, clickedIndex + 1);
    onSelectedStars(selectedStarsArr);
  };

  return (
    <>
      <StarsContainer
        onClick={(e) => {
          handleStarClick(e.target.id);
        }}
      >
        {starCounter.map((key) => {
          const isSelected = selectedStars.includes(key);
          return (
            <svg
              key={key}
              width={starSize}
              height={starSize}
              id={key}
              style={{ cursor: "pointer" }}
            >
              <use
                id={key}
                href={`${Sprite}#icon-star`}
                style={{ fill: isSelected ? "#FFE34E" : "#DBE4E8" }}
              />
            </svg>
          );
        })}
      </StarsContainer>
    </>
  );
}

Raiting.propTypes = {
  onSelectedStars: PropTypes.func.isRequired,
  selectedStars: PropTypes.array.isRequired,
};

export default Raiting;
