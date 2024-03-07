import React from 'react'
import { Button, Navbar, NavbarBrand} from 'flowbite-react';
import logo from "../images/plogo.png"
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../contextStore/UserContext';
import RegisterModal from '../pages/RegisterModal';


const NavBar = () => {
  const { setOpenModal, loggedIn ,userName} = useUserContext();
  return (
    <>




      <Navbar fluid className='nav'>
        <NavbarBrand href="">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Post Explorer</span>
        </NavbarBrand>
        {loggedIn? <h2 className='text-lg font-semibold hidden md:block'>Welcome <span className='text-xl font-semibold text-blue-800'>{userName.toUpperCase()}</span> to Post Explorer</h2>:<span className='text-xl font-semibold hidden md:block'>Welcome to POST EXPLORER</span>}
        <div className="flex md:order-2 gap-9">


          {loggedIn ? <Button><NavLink to="/logout">Logout</NavLink></Button> : <Button onClick={() => setOpenModal(true)}>Sign Up</Button>
          }

          <RegisterModal />
        </div>
        
      </Navbar>

    </>
  )
}

export default NavBar
