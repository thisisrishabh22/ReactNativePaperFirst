import axios from "axios";
import * as actionTypes from "./actionTypes";

export const loadPostSuccess = (posts) => {
  return {
    type: actionTypes.LOAD_POST_SUCCESS,
    payload: posts,
  };
};

export const loadPostFailure = (error) => {
  return {
    type: actionTypes.LOAD_POST_FAILURE,
    payload: error,
  };
};

export const loadPost = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const posts = res.data;
        dispatch(loadPostSuccess(posts));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(loadPostFailure(errMsg));
      });
  };
};

export const loadImgAvatarSuccess = (users) => {
  return {
    type: actionTypes.LOAD_IMAGE_AVATAR_SUCCESS,
    payload: users,
  };
};

export const loadImgAvatarFailure = (error) => {
  return {
    type: actionTypes.LOAD_IMAGE_AVATAR_FAILURE,
    payload: error,
  };
};

export const loadImgAvatar = () => {
  return (dispatch) => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        const users = res.data;
        dispatch(loadImgAvatarSuccess(users));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(loadImgAvatarFailure(errMsg));
      });
  };
};