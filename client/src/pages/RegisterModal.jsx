import React, { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useUserContext } from '../contextStore/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterModal = () => {

    const { openModal, setOpenModal, storeToken, setLoggedIn,} = useUserContext();
    const [confirmPassword, setConfirmPassword] = useState("")
    const [verified, setVerified] = useState(false)
    const [show, setshow] = useState(false)
    const [check, setCheck] = useState(false)
    const [userDetails, setUserDetails] = useState({
        email: "",
        username: "",
        password: ""
    });
    const Navigate = useNavigate();
    const setDetails = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
        if(name==="password"){
            setConfirmPassword("")
            setVerified(false)
        }
    }
    const passwordCheck = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === userDetails.password) {
            setVerified(true);
        }
        else setVerified(false)
    }

    const handleCheck = (e)=>{
        setCheck(!check);
    }

    
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/v1/users/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userDetails)
            });
            const res_data_json = await response.json();
            console.log(res_data_json);
            console.log(response);

            if (response.ok) {


                storeToken(res_data_json.data.token);

                setLoggedIn(pre=>!pre);

                toast.success(res_data_json.message);

                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })
                setConfirmPassword("");
                onCloseModal();
                Navigate("/posts");
            }
            else {
                toast.error(res_data_json.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function onCloseModal() {
        setOpenModal(false);
        setUserDetails({
            username: "",
            email: "",
            password: ""
        })
        setConfirmPassword("");
    }
    return (
        <>


            <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body className=''>
                    <div className="space-y-6" >
                        <h3 className="text-2xl font-medium text-gray-900 bg-white "><span className='text-emerald-900 text-3xl font-bold'>SignUp Now...</span> & Explore More</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Enter Your E-Mail" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={userDetails.email}
                                onChange={setDetails}
                                name="email"
                                required
                            />
                        </div>
                        <div>


                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Enter Your Username" />
                            </div>
                            <TextInput
                                id="username"
                                placeholder="name@company.com"
                                value={userDetails.username}
                                onChange={setDetails}
                                name="username"
                                required
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <div className='relative'>
                                <TextInput id="password" placeholder='Enter Your Password' type={show ? "text" : "password"} required name="password" value={userDetails.password} onChange={setDetails} />
                                <span className='absolute right-3 top-2 cursor-pointer' onClick={() => { setshow(!show) }}>{show ? "Hide" : "Show"}</span>
                            </div>

                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="confirmPassword" value="Confirm Your password"  />
                            </div>
                            <TextInput id="confirmPassword" type="password" required placeholder='Re-Enter Your Password' value={confirmPassword}
                                onChange={passwordCheck} />
                            {verified ? "Matched" : "Not Matched"}
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" onChange={handleCheck} checked={check} />
                                <Label htmlFor="remember">I Accept the <span className='text-blue-600 underline'>Terms and Conditions</span></Label>
                            </div>
                        </div>
                        <div className="w-full" onClick={submitForm}>
                            <Button disabled={(!verified || !check)}>Register Now</Button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default RegisterModal
