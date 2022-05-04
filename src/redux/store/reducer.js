const ADD_ALL_USERS = 'ADD_ALL_USERS'


const defaultState = {
    username : '',
    email: '',
    id : ''
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ALL_USERS:
            return { ...state, users : [...action.payload] }

        default:
            return state;
    }
}

export const addAllUsersAction = (payload) => ({ type: ADD_ALL_USERS, payload })
