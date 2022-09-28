import React from "react";
import {useEffect, useState} from 'react'
import {getAuth} from 'firebase/auth'
import {Link, useNavigate} from 'react-router-dom'
function Profile ()
{
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const auth = getAuth()
    useEffect (()=> {
        setUser(auth.currentUser)
    }, [])
    const onLogout = () => {
        auth.signOut(); 
        navigate('/')
    }
    return (
        <div>
            {user ? <h1>{user.email}</h1>: "not logged in"}
            <button type="submit" onClick={onLogout}>Log Out</button>
        </div>
    )
}

export default Profile