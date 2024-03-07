import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useUserContext } from '../contextStore/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })
  const [show, setshow] = useState(false)
  const { storeToken, setLoggedIn, token,setOpenModal } = useUserContext();
  const Navigate = useNavigate()


  const setLogin = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    });
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDetails)
      });
      console.log(response);
      const res_data_json = await response.json();
      console.log(res_data_json);

      if (response.ok) {


        storeToken(res_data_json.data.token);

        setLoggedIn(pre=>!pre);

        toast.success(res_data_json.message);
        // alert(res_data_json.message)

        setLoginDetails({
          email: "",
          password: ""
        })
        Navigate("/posts");
      }
      else {
        toast.error(res_data_json.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Login Now to Explore...</h3>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            placeholder="name@company.com"
            value={loginDetails.email}
            onChange={setLogin}
            name="email"
            required
          />
          
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <div className='relative'>
            <TextInput id="password" type={show ? "text" : "password"} required name="password" value={loginDetails.password}
              onChange={setLogin} />
            <span className='absolute right-3 top-2 cursor-pointer' onClick={() => { setshow(!show) }}>{show ? "Hide" : "Show"}</span>
          </div>
        </div>
        <div className="flex justify-between">

          
        </div>
        <div className="w-full">
          <Button onClick={submitForm}>Login Now</Button>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?&nbsp;
          <p onClick={() => setOpenModal(true)} className="text-cyan-700 hover:underline cursor-pointer dark:text-cyan-500">
            Create account
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
