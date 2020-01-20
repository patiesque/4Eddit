import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/" 

const headers = {headers: { auth: token} }


const getPostsAction = (posts) => {
    return {
      type: "GET_POSTS",
      payload: {
        posts,
      }
    };
};

const getPostsDetailAction = (postId) => {
    return {
      type: "GET_POSTS_DETAIL",
      payload: {
        postId,
      }
    };
};



//Get Posts
export const getPosts = () => async (dispatch) => {
    const response = await axios.get (`${baseURL}posts`, {headers:{
        auth: token}
    })
    window.localStorage.setItem("token", response.data.token)

    dispatch(getPostsAction(response.data.posts))
}

//Get Post Detail
export const getPostsDetail = (postId) => async (dispatch) => {
    const response = await axios.get (`${baseURL}posts/${postId}`, {headers:{
        auth: token}
    })
    window.localStorage.setItem("token", response.data.token)

    dispatch(getPostsDetailAction(response.data.posts.comments))
}

//Create Posts
export const createPost =(text, title) => async (dispatch) => {
    const createPostInformation = {
       text,
       title
    }

    try{
    const response = await axios.post(`${baseURL}posts`, createPostInformation, headers);
  
    window.localStorage.setItem("token", response.data.token)
   }catch{
    window.alert("Erro no login")
  }

  dispatch(push(routes.feed))

}

//Create Comment
export const createComment =(text, postId) => async (dispatch) => {
    const createCommentInformation = {
       text
    }
     
    try{
    const response = await axios.post(`${baseURL}posts/${postId}/comment`, createCommentInformation, headers);
  
    window.localStorage.setItem("token", response.data.token)
   }catch{
    window.alert("Erro no login")
  }

  dispatch(push(routes.feed))

}

//Vote
export const vote = (postId) => async (dispatch) => {
    const response = await axios.put (`${baseURL}posts/${postId}/vote`, {headers:{
        auth: token}
    })
    window.localStorage.setItem("token", response.data.token)
}

//Vote Comment
export const voteComment = (postId, commentId) => async (dispatch) => {
    const response = await axios.put (`${baseURL}posts/${postId}/comment/${commentId}/vote`, {headers:{
        auth: token}
    })
    window.localStorage.setItem("token", response.data.token)
}