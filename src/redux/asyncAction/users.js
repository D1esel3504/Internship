import { addAllUsersAction } from "../store/reducer"

export const fetchUsers = () => {
    return (dispatch) =>  {
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => dispatch(addAllUsersAction(json)))
  .then(res => console.log(res))
    } 
}