import { FETCH_ALL, CREATE, } from '../constants/actionTypes';
import * as api from '../api/index.js';

// action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const createPost = (post) => async (dispatch) => {
//     try {
//       const { data } = await api.createPost(post);
//         //sending post api req to backend sever
//       dispatch({ type: CREATE, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

  // export const updatePost = (id, post) => async (dispatch) => {
  //   try {
  //     const { data } = await api.updatePost(id, post);
  //     // this req gets the updated post then destructures the response to get data
  
  //     dispatch({ type: UPDATE, payload: data });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // export const deletePost = (id) => async (dispatch) => {
  //   try {
  //     await api.deletePost(id);
  
  //     dispatch({ type: DELETE, payload: id });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // export const likePost = (id) => async (dispatch) => {
  //   try {
  //     const { data } = await api.likePost(id);
  
  //     dispatch({ type: LIKE, payload: data });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };