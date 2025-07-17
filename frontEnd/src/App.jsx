// import axios from './api/axiosConfig'
import React, { useEffect } from 'react'
import NavBar from './components/NavBar';
import MainRoutes from './routes/MainRoutes';
import { useDispatch } from 'react-redux';
import { asynccurrentuser } from './store/actions/UserActions';
import { asyncloadProducts } from './store/actions/ProductActions';

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(asynccurrentuser())
    dispatch(asyncloadProducts())
  },[])

  return (
    <div className='h-screen w-full bg-[#fff5f5] overflow-x-hidden overflow-y-auto flex flex-col'>
      <NavBar />
      <MainRoutes />      

    </div>
  )
}

export default App
