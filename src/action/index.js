import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/"


const getPostsAction = (posts) => {
  return {
    type: "GET_POSTS",
    payload: {
      posts,
    }
  }
};

export const getPostsDetailAction = (id) => {
  return {
    type: "GET_POSTS_DETAIL",
    payload: {
      id,
    }
  };
};

export const setCommentsAction = (post) => {
  return {
    type: "SET_COMMENTS",
    payload: {
      post,
    }
  };
};



//Get Posts
export const getPosts = () => async (dispatch) => {
  const headers = { headers: { auth: window.localStorage.getItem("token") } }
  const response = await axios.get(`${baseURL}posts`, headers)

  dispatch(getPostsAction(response.data.posts))

}

//Get Post Detail
export const getPostsDetail = (id) => async (dispatch) => {
  console.log(id)
  const headers = { headers: { auth: window.localStorage.getItem("token") } }
  const response = await axios.get(`${baseURL}posts/${id}`, headers)
  console.log(response.data.post)
  dispatch(setCommentsAction(response.data.post))

}










//Create Posts
export const createPost = (text, title) => async (dispatch) => {
  const createPostInformation = {
    text,
    title
  }
  const headers = { headers: { auth: window.localStorage.getItem("token") } }


  try {
    await axios.post(`${baseURL}posts`, createPostInformation, headers)
  } catch{
    window.alert("Erro no login")
  }

  dispatch(push(routes.feed))

}

//Create Comment
export const createComment = (text, postId) => async (dispatch) => {
  const createCommentInformation = {
    text
  }
  const headers = { headers: { auth: window.localStorage.getItem("token") } }


  try {
  await axios.post(`${baseURL}posts/${postId}/comment`, createCommentInformation, headers);

  } catch{
    window.alert("Erro no login")
  }
//atualizar o post
  dispatch(push(routes.feed))

}

//Vote
export const vote = (postId) => async (dispatch) => {
  const headers = { headers: { auth: window.localStorage.getItem("token") } }

  await axios.put(`${baseURL}posts/${postId}/vote`, headers)
}

//Vote Comment
export const voteComment = (postId, commentId) => async (dispatch) => {
  const headers = { headers: { auth: window.localStorage.getItem("token") } }

  await axios.put(`${baseURL}posts/${postId}/comment/${commentId}/vote`, headers)
}