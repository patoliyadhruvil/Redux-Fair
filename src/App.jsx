import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import ViewPage from './components/ViewPage/ViewPage'
import { Route, Routes } from 'react-router'
import EditStudent from './components/Editstudent/EditStudent'
import Createformdata from './components/CreateEmployee/Createformdata'



function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route element={<Createformdata/>} path='/'/>
        <Route element={<ViewPage/>} path='/view'/>
        <Route element={<EditStudent/>} path='/edit'/>
      </Routes>
    </>
  )
}

export default App
