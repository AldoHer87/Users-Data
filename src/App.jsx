import axios from 'axios'
import { useEffect, useState } from 'react'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import './App.css'

function App() {

  const [userData, setUserData] = useState([])

  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud.academlo.tech/users/')
      .then(res => setUserData(res.data))
  }, [])

  console.log(userData);

  const getUser = () => {
    axios.get('https://users-crud.academlo.tech/users/')
      .then(res => setUserData(res.data))
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }

  return (
    <div className="App">
      <UsersList 
        userData={userData} 
        getUser={getUser}
        selectUser={selectUser}
      />
      <UsersForm 
        getUser={getUser}
        userSelected={userSelected}
        selectUser={selectUser}
        />
    </div>
  )
}

export default App