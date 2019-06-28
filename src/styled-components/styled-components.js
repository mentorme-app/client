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
`;
export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  height: 50vw;
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
`;

export const AddQuestionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 86px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PlusIcon = styled(IoIosAddCircleOutline)`
  color: #5574f7;
  width: 30vw;
  height: 30vw;
  padding: 86px;
`;

export const MinusIcon = styled(IoIosRemoveCircleOutline)`
  color: #5574f7;
  width: 30vw;
  height: 30vw;
  padding: 86px;
`;

export const StyledFooter = styled.footer`
  background-image: linear-gradient(25deg, #5574f7, #60c3ff);
  max-width: 800px;
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
  max-width: 800px;
  margin: 0 auto;
  background-image: linear-gradient(25deg, #5574f7, #60c3ff);
  width: 100%;
  height: 86px
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;

  span {
    text-align: center;
  }
  footer {
    background-image: linear-gradient(25deg, #5574f7, #60c3ff);
    max-width: 800px;
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

export const StyledChat = styled.div`
  .chatHeader {
    padding: 1rem;
    display: flex;
    align-items: center;
    h2 {
      margin: 0 2rem;
      text-align: center;
    }
  }

  .chat {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px #4c5264 solid;

    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin: 1rem;
    }

    p {
      font-size: 0.6rem;
    }
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
    max-width: 800px;
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
`

export const StyledInput = styled.input`
  position: relative;
  overflow: hidden;
  align-self:center;
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

export const ArrowForward = styled(IoIosArrowForward)`
  background-color: #5574f7;
  border-radius: 50%;
  color: white;
  padding: 0.5rem;
  margin: 0.5rem;
`;

export const StyledDropdown = styled(Dropdown)``;
