import axios from 'axios';

//const url = "http://localhost:4000/posts";
//const url = 'https://social-media-app-2.herokuapp.com/posts';
const API = axios.create({ baseURL: 'https://social-media-app-2.herokuapp.com' });



export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (userData) => API.post('user/signin', userData);
export const signUp = (userData) => API.post('user/signup', userData);

