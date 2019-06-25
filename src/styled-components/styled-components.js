import styled from "styled-components";

export const StyledHeadSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 15% vh;
  margin: 0 auto;
`;
export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledH1 = styled.h1`
  color: #5887f9;
  font-size: 20px;
  font-family: Gibson;
`;

export const StyledSubheading = styled.h1`
  font-size: 10px;
  text-align: center;
`;

export const StyledQuestionCard = styled.div`
  background-image: url(${props => props.inputPicture});
  background-repeat: no-repeat;
  background-size: cover;
  
  .h1 {
    font-size: 24px;
    text-align: center;
  }

  .h2 {
    font-size: 16px;
    color: #ffffff 60%;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;