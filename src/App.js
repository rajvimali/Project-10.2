import React from 'react'
import UserList from './Components/Users/UserList'
import { Route, Routes } from 'react-router-dom'
import AddUser from './Components/Users/AddUser'
import EditUser from './Components/Users/EditUser'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
      </Routes>

    </>
  )
}

export default App