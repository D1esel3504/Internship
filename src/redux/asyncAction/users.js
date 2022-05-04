import { addAllUsersAction } from "../store/reducer"

export const fetchUsers = () => {
    return async dispatch => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await response.json();
        dispatch(addAllUsersAction(json));
        console.log(json);
    } 
}

