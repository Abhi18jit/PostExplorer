import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify';

const UserContext = createContext();

export const CreateUser = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [loggedIn, setLoggedIn] = useState(!!token);
    const [AuthorizationToken, setAuthorizationToken] = useState("");
    const [userName, setUserName] = useState("");


    const storeToken = (token) => {
        setToken(token);
        setAuthorizationToken(`Bearer ${token}`)
        return localStorage.setItem("token", token);
    }
    const logOutUser = () => {
        setToken("");
        setAuthorizationToken("")
        setLoggedIn(false);
        if(localStorage.getItem("token")){
            toast.success("Logout Successfully");
            localStorage.removeItem("token");
        }
        
    }

    return (
        <UserContext.Provider value={{ openModal, setOpenModal,setUserName,userName, AuthorizationToken,storeToken, token, loggedIn, setLoggedIn, logOutUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}
