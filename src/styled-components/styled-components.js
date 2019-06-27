import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import img from "../images/ask-blackboard-356079.jpg";

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
`;

export const StyledSubheading = styled.h1`
  font-size: 10px;
  text-align: center;
`;

export const StyledSearchBar = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 0.7rem;
  input {
    margin: 0.5rem 0rem;
    padding: 0.5rem;
    background: none;
    border: none;
    border-bottom: 1px solid #5887f9;
    ${"" /* border-radius: 0.2rem; */}
    color: #5887f9;
    text-align: center;
    ::-webkit-input-placeholder {
      color: #5887f9;
      font-size: 0.7rem;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const StyledQuestionCard = styled.div`
  background-image: url(${props => (props.image ? props.image : img)});
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vw;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-end;
  pointer: cursor;
  h1 {
    font-size: 24px;
    text-decoration: none;
    color: white;
    margin: 0;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    color: #616161;
    text-shadow: #e0e0e0 1px 1px 0;
  }

  p {
    margin: 1rem 0 1rem 0;
    text-decoration: none;
    color: white;
    font-size: 0.7rem;
    font-family: "Helvetica Neue";
  }
`;

export const StyledFooter = styled.footer`
  background-image: linear-gradient(25deg, #5574f7, #60c3ff);
  display: flex;
  padding: 0.5rem;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  a {
    color: #fff;
  }
`;

export const SignupModal = styled.div`
  animation: ${props => (props.display ? fadeIn : fadeOut)} 0.3s linear;
  display: ${props => props.display};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 812px;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(25deg, #5574f7, #60c3ff);
  color: #fff;

  div {
    margin: 133px 30px;

    a {
      text-decoration: underline;
      color: #fff;
      cursor: pointer;
    }
    h1 {
      color: #fff;
      margin-bottom: 90px;
    }
    form {
      display: flex;
      flex-direction: column;
      * {
        box-sizing: border-box;
      }

      input {
        margin: 1.2rem 0rem;
        padding-bottom: 1rem;
        background: none;
        border: none;
        border-bottom: 1px solid #fff;
        color: #fff;
        font-size: 1rem;
        ::-webkit-input-placeholder {
          color: #fff;
          font-size: 1rem;
        }
        &:focus {
          outline: none;
        }
      }

      button {
        background-color: #fff;
        color: #5887f9;
        padding: 1rem;
        border: none;
        border-radius: 0.3rem;
        font-size: 1rem;
        font-weight: bold;
        margin: 1.2rem 0rem;
      }
    }
  }
`;

export const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const BlackLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const SideNav = styled.nav`
  position: absolute;
  top: 7%;
  background-color: white;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledQuestionHeader = styled.header`
  background-color: #5574f7;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 6.5vh;

    img {
      width: 20vh;
      height: 20vh;
      margin: 0 auto;
      border: white 0.3rem solid;
      border-radius: 25%;
    }
  }

  h1 {
    margin-top: 6vh;
    color: white;
    font-size: 20px;
  }
`;

export const QuestionBox = styled.div`
  margin: 20vh 10vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    color: #5887f9;
    font-size: 20px;
    margin: 1rem 0;
  }

  p {
    font-size: 16px;
  }
`;

export const QuestionFooter = styled.footer`
  background-color: #5574f7;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;

  div {
    text-align: center;
    font-size: 12px;
  }
`;

export const MessageHeader = styled.header`
  background-color: white;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: lightgrey 0.2rem solid;

  div {
    margin: 4vh;

    img {
      width: 10vh;
      height: 10vh;
      margin: 0 auto;
      border: white 0.3rem solid;
      border-radius: 25%;
    }
  }

  h1 {
    margin-top: 6vh;
    color: #4C5264;
    font-size: 16px;
  }
`;