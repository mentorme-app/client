import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
  IoIosArrowForward
} from "react-icons/io";
import Dropdown from "react-dropdown";

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
  font-size: 1.5rem;
  border-bottom: 1px #5887f9 solid;
  button {
    border: none;
    font-size: 1rem;
    background-color: #5887f9;
    color: #fff;
    padding: 1rem;
    font-size: 1rem;
    outline: none;
  }

  h1 {
    color: #5887f9;
    font-size: 2rem;
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
  background-image: url(${props =>
    props.image
      ? props.image
      : "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"});
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vw;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-end;

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
    margin: 1rem 0 3vw 0;
    text-decoration: none;
    color: white;
    font-size: 0.9rem;
  }
  @media (min-width: 600px) {
    width: 530px;
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
    flex-direction: row-reverse;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 70px;
  }
`;

export const AddQuestionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PlusIcon = styled(IoIosAddCircleOutline)`
  color: #fff;
  font-size: 1rem;
  margin: -3px 0;
`;

export const MinusIcon = styled(IoIosRemoveCircleOutline)`
  color: #fff;
  font-size: 1rem;
  margin: -3px 0;
`;

export const StyledFooter = styled.footer`
  background-image: linear-gradient(25deg, #5574f7, #60c3ff);
  margin: 0 auto;
  display: flex;
  padding: 0.5rem 0rem;
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

export const MessageHeader = styled.header`
  background-color: white;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: #e2e8ed 0.1rem solid;

  h1 {
    align-self: center;
    color: #4c5264;
    font-size: 16px;
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
    height: 100vh;
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

export const ConversationPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 86px;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    left: 0;
    right: 0;
    bottom: 2rem;
  }

  footer {
    background-image: linear-gradient(25deg, #5574f7, #60c3ff);
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 0.5rem 0rem;
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
  }
`;

export const MessageLeft = styled.div`
  border: 0.1rem solid #e2e8ed;
  border-radius: 15px;
  align-self: flex-start;
  margin: 0.5rem 0.5rem 0 0.5rem;
  max-width: 80%;

  p {
    text-align: left;
    padding: 0.5rem;
    text-align: center;
  }
`;

export const MessageRight = styled.div`
  border: 0.1rem solid #5574f7;
  border-radius: 15px;
  background-color: #5574f7;
  align-self: flex-end;
  margin: 0.5rem 0.5rem 0 0.5rem;
  max-width: 80%;

  p {
    padding: 0.5rem;
    text-align: left;
    color: white;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  position: relative;
  overflow: hidden;
  align-self: center;
  background-color: white;
  border: 1px solid #5574f7;
  border-radius: 2px;
  box-sizing: border-box;
  color: #5574f7;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 10px;
  transition: all 200ms ease;
  width: 80%;
  margin: 0.5rem;
  ::placeholder {
    color: #5574f7;
  }
`;

export const StyledQuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .Dropdown-control {
    align-self: stretch;
    border: 1px solid #5574f7;
    color: #5574f7;
  }

  .Dropdown-menu {
    align-items: flex-start;
    .Dropdown-option {
      text-align: left;
      color: #5574f7;
      align-items: flex-start;
    }
  }

  input {
    outline: none;
    border: 1px solid #5574f7;
    padding: 1rem;
    margin: 0.5rem 0;
    ::placeholder {
      color: #5574f7;
    }
  }
  input[type="submit"] {
    border: none;
    color: #fff;
    background-color: #5574f7;
  }
`;

export const ArrowForward = styled(IoIosArrowForward)`
  background-color: #5574f7;
  border-radius: 50%;
  color: white;
  padding: 0.5rem;
  margin: 0.5rem;
`;

export const StyledDropdown = styled(Dropdown)``;
