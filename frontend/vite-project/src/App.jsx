import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import CreateUser from './createUser'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'
import Users from './Users'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Users />}></Route>
          <Route path='/create' element = {<CreateUser />}></Route>
          <Route path='/update/:id' element = {<UpdateUser />}></Route>
          <Route path='/delete/:id' element = {<DeleteUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
