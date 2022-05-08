export const ADD_ALL_USERS = 'ADD_ALL_USERS'
export const REMOVE_ALL_USERS = 'REMOVE_ALL_USERS'
export const REMOVE_USER = 'REMOVE_USER'
export const FETCH_USERS = 'FETCH_USERS'

const defaultState = {
    users: []
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ALL_USERS:
            return { ...state, users: [ ...action.payload] }
        case REMOVE_ALL_USERS:
            return { ...state, users: [] }
        case REMOVE_USER:
            return { ...state, users: action.payload}

        default:
            return state;
    }
}

export const addAllUsersAction = (payload) => ({ type: ADD_ALL_USERS, payload })
export const fetchUsers = () => ({ type: FETCH_USERS })
export const removeAllUsersAction = () => ({ type: REMOVE_ALL_USERS })
export const removeUserAction = (payload) => ({ type:REMOVE_USER, payload })