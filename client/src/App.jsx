import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Community from './pages/Community'
import { assets } from './assets/assets'
// import './assets/prism.css'
import Prism from 'prismjs'
import Loading from './pages/Loading'
import { useAppContext } from './context/AppContext'
import Login from './pages/Login'

const Message = ({message}) => {
  useEffect(()=> {
    Prism.hightlightAll()
  },[message.content])
}

const App = () => {

  const {user} = useAppContext()

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const {pathname} = useLocation();

  if(pathname === '/loading') return <Loading />

  return (
    <>
        {!isMenuOpen && <img src={assets.menuIcon} alt='menuIcon' 
        className='absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert'
        onClick={()=> setisMenuOpen(true)} />}

        {user ? (
          <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000] 
    dark:text-white'>
      <div className='flex h-screen w-screen'>
          <SideBar isMenuOpen={isMenuOpen} setMenuOpen={setisMenuOpen} />
          <Routes>
            <Route path='/' element={<ChatBox />} />
            <Route path='/credits' element={<Credits />} />
            <Route path='/community' element={<Community />} />
          </Routes>
          </div> 
    </div>
        ): (
            <div className='bg-gradient-to-b from-[#242124] to-[#000000] flex 
            items-center justify-center h-screen w-screen'> 
              <Login /> 
              </div>
        )}

    
    </>
  )
}

export default App