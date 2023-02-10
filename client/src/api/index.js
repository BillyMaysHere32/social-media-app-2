import axios from 'axios';

// const API = axios.create({ baseURL: 'https://social-media-app-2.herokuapp.com' });

const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (userData) => API.post('/user/signin', userData);
export const signUp = (userData) => API.post('/user/signup', userData);

// const url = "http://localhost:4000/posts";
// const url = 'https://social-media-app-2.herokuapp.com/posts';
// const urlSignIn = 'http://localhost:4000/user/signin';
// const urlSignup = 'http://localhost:4000/user/signup';

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`); 

// export const signIn = (userData) => axios.post(urlSignIn, userData);
// export const signUp = (userData) => axios.post(urlSignup, userData);


