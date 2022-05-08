import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { removeAllUsersAction, removeUserAction, fetchUsers} from './store/reducer';






const App = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const usersFilter = id => users.filter(user => user.id !== id)


console.log(users);

  return (
    <div className="wrapper">
      <div className="input">
        <div>
          <button onClick={() => { dispatch(fetchUsers()) }}>Получить пользователей</button>
          <button onClick={() => { dispatch(removeAllUsersAction()) }}>Удалить пользователей</button>
        </div>
        {users.length > 0 ? users.map(user => (
          <div className="info">
            <span>UserName - {user.username}</span>
            <span>Email - {user.email}</span>
            <span>ID - {user.id}</span>
            <button onClick={()=> {dispatch(removeUserAction(usersFilter(user.id)))}}>Удалить пользователя</button>
          </div>
        ))
          : <div>Нет пользователей</div>}
      </div>
    </div>
  );
}

export default App;