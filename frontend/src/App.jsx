import React from 'react'
import "./App.css"
import {Routes,Route} from "react-router-dom"
import Register from './pages/Register'
import Layout from './component/Layout'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={  <Layout/>}>
        <Route path='/register' element={  <Register/>}/>
        <Route path='/login' element={  <Login/>}/>

        </Route>
      </Routes>
    
    </div>
  )
}

export default App