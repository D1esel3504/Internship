import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { fetchUsers } from './redux/asyncAction/users';
import { removeAllUsersAction, removeUserAction } from './redux/store/reducer';






const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users)

console.log(user);



  return (
    <div className="wrapper">
      <div className="input">
        <div>
          <button onClick={() => { dispatch(fetchUsers()) }}>Получить пользователей</button>
          <button onClick={() => { dispatch(removeAllUsersAction()) }}>Удалить пользователей</button>
        </div>
        {user.length > 0 ? user.map(user => (
          <div className="info">
            <span>UserName - {user.username}</span>
            <span>Email - {user.email}</span>
            <span>ID - {user.id}</span>
            <button onClick={()=> {dispatch(removeUserAction(user.id))}}>Удалить пользователя</button>
          </div>
        ))
          : <div>Нет пользователей</div>}
      </div>
    </div>
  );
}

export default App;
