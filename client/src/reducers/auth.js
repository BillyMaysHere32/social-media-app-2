import { AUTH, LOGOUT } from '../constants/actionTypes';

const auth = (state = { authData: null }, action) => {
    switch (action.type) {
    case AUTH:
        console.log("reducer", action.payload)
        localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
        
        return { ...state, authData: action?.payload };

    case LOGOUT:
        localStorage.clear();

        return { ...state, authData: null };
    default:
        return state;
    }
}

export default auth;