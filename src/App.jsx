import React, { useEffect, useRef, useState } from 'react'
import './App.scss';






const App = () => {
  const [rooms, setRooms] = useState([])
  const textInput = useRef()
  const roomsApi = 'https://tms-js-pro-back-end.herokuapp.com/api/meet-rooms/'
  const [findRoom, setFindRoom] = useState([])
  const [filterRoom, setFilterRoom] = useState([])


  const requestOnServer = () => {
    return fetch(
      roomsApi,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }

  useEffect(() => {
    const getRooms = async () => {
      try {
        const getRooms = await requestOnServer()
        const result = await getRooms.json()
        setRooms(result)
      } catch (error) {
        console.error('error-' + error)
      }
    }
    getRooms()
  }, [])


  const searchRoom = () => {
    if (textInput.current.value !== '') {
      const foundedRoom = rooms.filter(i => i.description.toUpperCase().includes(textInput.current.value.toUpperCase()))
      setFindRoom(foundedRoom)
      textInput.current.value = ''
    }
  }

  const handleChange = () => {
    if (textInput.current.value !== '') {
      const checkedRoom = rooms.filter(i => i.description.toUpperCase().includes(textInput.current.value.toUpperCase()))
      setFilterRoom(checkedRoom)
    }
    else {
      setFilterRoom([])
    }

  }




  return (
    <div className="wrapper">
      <div className="input">
        <div>
          <input ref={textInput} onChange={handleChange} type="text" placeholder='press room' />
          <button onClick={searchRoom}>Search</button>
          {filterRoom && filterRoom.map(i => (
            <ul className="info">
              <li>{i.description}</li>
            </ul>
          ))}
        </div>
        {findRoom && findRoom.map(i => (
          <div className="info">
            <span>{i.description}</span>
            <span>Address - {i.address}</span>
            <span>Floor - {i.floor}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
