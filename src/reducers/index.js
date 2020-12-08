import {apiAddUser, apiGetUsers} from "../api";

const GET_USERS = 'users/get';
const ADD_USER = 'user/add';
const SELECT_USER = 'user/select';
const SEARCH_USER = 'user/search';

const getUsers = (users) => ({ type: GET_USERS, payload: users });
export const addUser = payload => ({
    type: ADD_USER,
    payload
})
export const selectUser = payload => ({
    type: SELECT_USER,
    payload
})
export const searchUser = payload => ({
    type: SEARCH_USER,
    payload
})

export const fetchGetUsers = () => {
    return (dispatch) => {
        apiGetUsers()
            .then(res => {
                dispatch(getUsers(res));
            })
    }
};
export const fetchAddUser = (user) => {
    return (dispatch) => {
        apiAddUser(user)
            .then(res => {
                dispatch(addUser(res));
            })
    }
};
const initialState = {
    data: [],
    selected: null,
    search : ''
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...state, data:action.payload }
        case ADD_USER:
            return {...state,
                data: [action.payload, ...state.data]};
            case SELECT_USER:
            return {
                ...state,
                selected: action.payload
            }
        case SEARCH_USER:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}
