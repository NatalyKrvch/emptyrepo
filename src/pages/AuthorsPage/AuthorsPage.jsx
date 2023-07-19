import {
  GridWrapper,
  Item,
  BoldItem,
  PageWrapper,
  Img,
} from "./AuthorsPageStyled";
import { StyledH1 } from "../../pages/FeedbackPage/FeedbackPageStyled";
import authorsList from "./authorsList.json";
import linkedInIcon from "../../images/linkedin.svg";

function Authors() {
  return (
    <>
      <PageWrapper>
        <StyledH1>Автори веб-сервісу</StyledH1>
        <GridWrapper>
          {authorsList.map((author, index) => (
            <>
              <BoldItem key={index}>{author.Position}</BoldItem>
              <Item>{author.Name}</Item>
              <Item>
                <a href={author.LinkedIn} target="_blank" rel="noreferrer">
                  <Img src={linkedInIcon} alt="LinkedIn" />
                </a>
              </Item>
            </>
          ))}
        </GridWrapper>
      </PageWrapper>
    </>
  );
}

export default Authors;
