import * as actionTypes from "../actions/actionTypes";

const initState = {
  users: [],
  posts: [],
};

export const RootReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_POST_SUCCESS:
      let newPost = action.payload;
      return {
        ...state,
        posts: newPost,
      };
    case actionTypes.LOAD_POST_FAILURE:
      console.log("LOAD POST ERROR", action.payload);

    case actionTypes.LOAD_IMAGE_AVATAR_SUCCESS:
      let newUsers = action.payload;
      console.log(newUsers);
      return {
        ...state,
        users: newUsers,
      };
    case actionTypes.LOAD_IMAGE_AVATAR_FAILURE:
      console.log("LOAD IMAGES ERROR", action.payload);

    case actionTypes.ADD_TO_SAVE:
      let saveId = action.payload;
      let newPost1 = state.posts.map((item) => {
        if (
          item.id === saveId &&
          (item.saved === true || item.saved === false)
        ) {
          item.saved = !item.saved;
        }
      });
      return {
        ...state,
        posts: newPost1,
      };
  }

  return state;
};
