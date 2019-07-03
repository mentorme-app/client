import axios from "axios";
import jwtDecode from "jwt-decode";
import * as types from "./actionTypes";

export const signup = userData => dispatch => {
  const { username, email, password } = userData;
  dispatch(authSignup());
  return axios
    .post("https://mentor-me-backend.herokuapp.com/api/auth/register", {
      username,
      email,
      password
    })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      const user = jwtDecode(res.data.token);
      dispatch(authSuccess(user.subject));
      return res;
    })
    .catch(err => {
      dispatch(authFail(err.response.data.message));
      return err;
    });
};

export const loginUser = user => dispatch => {
  dispatch(authSignup());
  return axios
    .post("https://mentor-me-backend.herokuapp.com/api/auth/login", user)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      const user = jwtDecode(res.data.token);
      dispatch(authSuccess(user.subject));
      return res;
    })
    .catch(err => {
      dispatch(authFail(err.response.data.message));
      return err;
    });
};

// SIGN UP ACTION TYPES

export function authSignup() {
  return {
    type: types.AUTH_LOAD
  };
}

export function authSuccess(user) {
  return {
    type: types.AUTH_SUCCESS,
    payload: user
  };
}

export function authFail(payload) {
  return {
    type: types.AUTH_FAILURE,
    payload: payload
  };
}

// USER PROFILE

export const userProfile = id => dispatch => {
  dispatch(userLoad());
  axios
    .get(`https://mentor-me-backend.herokuapp.com/api/user/${id}`)
    .then(res => {
      dispatch(userSuccess(res.data));
    })
    .catch(err => {
      dispatch(userFail(err.message));
    });
};

export const editCred = (id, cred) => dispatch => {
  dispatch(userLoad());
  axios
    .put(`https://mentor-me-backend.herokuapp.com/api/user/${id}`, cred)
    .then(res => {
      dispatch(userEdit(res.data));
    })
    .catch(err => {
      dispatch(userFail(err.message));
    });
};

// USER PROFILE ACTION TYPES

export function userLoad() {
  return {
    type: types.USER_LOAD
  };
}

export function userSuccess(payload) {
  return {
    type: types.USER_SUCCESS,
    payload: payload
  };
}

export function userEdit(payload) {
  return {
    type: types.USER_EDIT,
    payload: payload
  };
}

export function userFail(payload) {
  return {
    type: types.USER_FAILURE,
    payload: payload
  };
}

export const fetchQuestions = () => dispatch => {
  axios
    .get("https://mentor-me-backend.herokuapp.com/api/questions")
    .then(res => {
      dispatch(questionsSuccess(res.data));
    })
    .catch(err => {});
};

export const fetchUserChats = id => dispatch => {
  axios
    .get(`https://mentor-me-backend.herokuapp.com/api/conversations/user/${id}`)
    .then(res => {
      dispatch(userChatIds(res.data));
    })
    .catch(err => {});
};

// QUESTION ACTIONS

export function questionsSuccess(payload) {
  return {
    type: types.QUESTIONS_SUCCESS,
    payload: payload
  };
}

export const submitQuestion = (
  title,
  question,
  author_id,
  tag_id
) => dispatch => {
  axios
    .post(`https://mentor-me-backend.herokuapp.com/api/questions`, {
      title,
      question,
      author_id,
      tag_id
    })
    .then(res => {
      dispatch(storeQuestion(res.data));
    })
    .catch(err => {});
};

export const storeQuestion = payload => {
  return {
    type: types.STORE_QUESTION,
    payload: payload
  };
};

//CONVERSATION ACTIONS

export const fetchConversations = questionId => dispatch => {
  axios
    .get(
      `https://mentor-me-backend.herokuapp.com/api/conversations?qid=${questionId}`
    )
    .then(res => {
      dispatch(conversationsSuccess(res.data));
    })
    .catch(err => {});
};

export const fetchConvById = convid => dispatch => {
  axios
    .get(`https://mentor-me-backend.herokuapp.com/api/conversations/${convid}`)
    .then(res => {
      dispatch(convByIdSuccess(res.data));
    })
    .catch(err => {});
};

export function conversationsSuccess(payload) {
  return {
    type: types.CONVERSATIONS_SUCCESS,
    payload: payload
  };
}

export function convByIdSuccess(payload) {
  return {
    type: types.CONV_BY_ID_SUCCESS,
    payload: payload
  };
}

export const newConversation = (mentorId, questionId) => dispatch => {
  const newConv = {
    mentor_id: mentorId,
    question_id: parseInt(questionId, 10)
  };

  return axios
    .post("https://mentor-me-backend.herokuapp.com/api/conversations", newConv)
    .then(res => {
      dispatch(addConversation(res.data));
    })
    .catch(err => {});
};

export function addConversation(data) {
  return {
    type: types.ADD_CONVERSATION,
    payload: data
  };
}

//Tags

export const fetchTags = () => dispatch => {
  axios
    .get("https://mentor-me-backend.herokuapp.com/api/tags")
    .then(res => {
      dispatch(tagsSuccess(res.data));
    })
    .catch(err => {});
};

export const tagsSuccess = payload => {
  return {
    type: types.TAGS_SUCCESS,
    payload: payload
  };
};

export function userChatIds(payload) {
  return {
    type: types.CHATS_ID,
    payload: payload
  };
}

//Messages

export const postMessage = (sender, text, convId) => dispatch => {
  axios
    .post("https://mentor-me-backend.herokuapp.com/api/messages", {
      sender: sender,
      text: text,
      conversation_id: convId
    })
    .then(res => {
      dispatch(storeMessage(res.data));
    });
};

export function storeMessage(payload) {
  return {
    type: types.STORE_MESSAGE,
    payload: payload
  };
}
