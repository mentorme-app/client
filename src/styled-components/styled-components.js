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
  .subheading {
    font-size: 10px;
    text-align: center;
  }
`;
export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 1.5rem;

  h1 {
    color: #5887f9;
    font-size: 20px;
  }
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
  height: 60vw;
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
  @media (min-width: 600px) {
    width: 550px;
    height: 390px;
    margin: 0.4rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    &:hover {
      box-shadow: 0px 15px 20px rgba(88, 135, 249, 0.7);
      transform: translateY(-7px);
    }
  }
`;

export const Wrapper = styled.section`
  margin-bottom: 36px;
  @media (min-width: 600px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 70px;
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
  margin-top: 1rem;
  a {
    color: #fff;
  }
  @media (min-width: 600px) {
    padding: 1rem;
    a {
      font-size: 2rem;
    }
  }
`;

export const FormModal = styled.div`
  animation: ${props => (props.display ? fadeIn : fadeOut)} 0.3s linear;
  display: ${props => props.display};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  text-align: center;
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

      input[type="submit"] {
        background-color: #fff;
        color: #5887f9;
        padding: 1rem;
        border: none;
        border-radius: 0.3rem;
        font-size: 1rem;
        font-weight: bold;
        margin: 1.2rem 0rem;
      }

      @media (min-width: 600px) {
        width: 50%;
        margin: 1rem auto;
        border: 1px #fff solid;
        padding: 2rem;
        border-radius: 1rem;
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
  background-image: linear-gradient(25deg, #5574f7, #60c3ff);
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 1rem;
    img {
      width: 18vh;
      height: 18vh;
      object-fit: cover;
      margin: 1.5rem auto;
      border: white 0.3rem solid;
      border-radius: 50%;
    }
  }

  h2 {
    margin-top: 4rem;
    color: white;
    font-weight: bold;
  }
`;

export const QuestionBox = styled.div`
  margin: 5rem auto;
  padding: 2rem;

  h3 {
    color: #5887f9;
    font-size: 16px;
    margin: 1rem 0;
  }

  p {
    font-size: 12px;
  }
`;

export const QuestionFooter = styled(StyledFooter)`
  justify-content: center;
  padding: 0.8rem;
  div {
    margin: 0 1rem;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const StyledLoader = styled.div`
  position: fixed;
  left: 50%;
  right: 50%;
  top: 50%;
  bottom: 50%;
`;

export const StyledChat = styled.div`
  .chatHeader {
    padding: 1rem;
    display: flex;
    align-items: center;
    a {
      color: #5887f9;
    }
    h2 {
      margin: 0 2rem;
      text-align: center;
      color: #5887f9;
    }
  }

  .chat {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px #5887f9 solid;
    h4 {
      margin: 0;
      color: #5887f9;
    }

    img {
      border: 1px #5887f9 solid;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin: 1rem;
      object-fit: cover;
    }

    p {
      font-size: 0.6rem;
    }
  }
`;

export const ProfileWrapper = styled.div`
  margin: 0;
  button {
    background-image: linear-gradient(25deg, #5574f7, #60c3ff);
    padding: 1rem;
    width: 100%;
    border: none;
    a {
      text-align: center;
      text-decoration: none;
      color: #fff;
      font-weight: bold;
    }
  }
  .info {
    margin: 0.5rem;
    padding: 0.5rem;

    h3 {
      font-weight: bold;
    }

    div {
      margin: 1rem 0;
    }
  }
  @media (min-width: 600px) {
    width: 70%;
    height:100vh;
    margin: 0 auto;
    font-size: 1.5rem;
  }
`;

export const StyledProfile = styled.div`
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 65vw;
  overflow: hidden;
  text-align: center;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;

  h3 {
    margin: 0.5rem 0;
    font-weight: bold;
  }
  div {
    margin: 0.5rem 0;
  }
  @media (min-width: 600px) {
    height: 35vw;
  }
`;
