const ADD_ALL_USERS = 'ADD_ALL_USERS'
const REMOVE_ALL_USERS = 'REMOVE_ALL_USERS'
const REMOVE_USER = 'REMOVE_USER'

const defaultState = {
    users: []
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ALL_USERS:
            return { ...state, users: [...action.payload] }
        case REMOVE_ALL_USERS:
            return { ...state, users: [] }
        case REMOVE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.payload)}

        default:
            return state;
    }
}

export const addAllUsersAction = (payload) => ({ type: ADD_ALL_USERS, payload })
export const removeAllUsersAction = (payload) => ({ type: REMOVE_ALL_USERS, payload })
export const removeUserAction = (payload) => ({ type:REMOVE_USER, payload })
