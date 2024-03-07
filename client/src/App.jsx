import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./layout/NavBar"
import Home from './pages/Home'
import RegisterModal from './pages/RegisterModal'
import FooterPage from "./layout/FooterPage"
import Posts from './pages/Posts'
import Logout from './pages/Logout'
import { useUserContext } from './contextStore/UserContext'
import "./App.css"

function App() {
  const { loggedIn } = useUserContext();
  console.log(loggedIn)
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <section className='back-section min-h-[80vh] flex flex-wrap justify-center align-items-center '>
          <Routes>

            {loggedIn ? <Route path="/" element={<Posts />} /> : <Route path="/" element={<Home />} />}

            <Route path="/register" element={<RegisterModal />} />
            {/* {loggedIn ? <Route path="/posts" element={<Posts />} /> : <Route path="/posts" element={<Home />} />} */}
            <Route path="/posts" element={<Posts />}/>
            <Route path="/logout" element={<Logout />} />
            
          </Routes>
        </section>

        <FooterPage />
      </BrowserRouter>

    </>
  )
}

export default App
