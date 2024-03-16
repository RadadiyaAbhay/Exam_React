import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import StudentForm from './components/StudentForm/StudentForm'
import StudentList from './components/StudentList/StudentList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getStudent } from './services/actions/student.action'
import StudentUpdate from './components/StudentUpdate/StudentUpdate'
import SignIn from './components/SignIn/SignIn'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<StudentForm/>} path='/add'/>
        <Route element={<StudentList/>} path='/'/>
        <Route element={<StudentUpdate/>} path='/update'/>
        <Route element={<SignIn/>} path='/signin'/>
      </Routes>
    </>
  )
}

export default App
