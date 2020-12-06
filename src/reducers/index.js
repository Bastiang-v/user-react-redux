const ADD_USER = 'user/add';

const addUser = payload => ({
    type: ADD_USER,
    payload
})
const initialState = {
    users: [{
        nombre: "testuser",
        apellido: "sommm",
        email: "user1@test.cl",
        profesion: "arquitecto",
        name: "Juan5456",
        lastname: "something",
        id: "_KMvqLU"
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
    }]
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state
    }
}