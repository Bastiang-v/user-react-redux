const ADD_USER = 'user/add';
const SELECT_USER = 'user/select';

export const addUser = payload => ({
    type: ADD_USER,
    payload
})
export const selectUser = payload => ({
    type: SELECT_USER,
    payload
})
const initialState = {
    data: [{
        nombre: "testuser",
        apellido: "sommm",
        email: "user1@test.cl",
        profesion: "arquitecto",
        name: "Juan5456",
        lastname: "something",
        id: "1"
    }, {
        nombre: "testuser",
        apellido: "sommm",
        email: "user2@test.cl",
        profesion: "arquitecto",
        name: "Juan5456",
        lastname: "something",
        id: "_KMvqLU3"
    }, {
        nombre: "testuser",
        apellido: "sommm",
        email: "user3@test.cl",
        profesion: "arquitecto",
        name: "Juan5456",
        lastname: "something",
        id: "_KMvqLU2"
    }],
    selected: null
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
            case SELECT_USER:
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state
    }
}
