import React,{useState, useContext} from 'react'
import Input from "../Input";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../Login.css'
import '../buttonuse.css'
import '../signupbutton.css'
import '../buttonGoogle.css'
import { UserContext } from '../context/user.context';

import { signInWithGooglePopup, createUserDocFromAuth, signinAuthUserWithEmailAndPassword } from '../utils/firebase';

const Login = (props)=>{
    const logGoogleUser = async () =>{
     const {user} = await signInWithGooglePopup();
     const userDocRef = await createUserDocFromAuth(user)
    }
     


    const {setCurrentUser} = useContext(UserContext)
     const [contact, setContact] = useState({
         email: '',
         password: ''
     })
    
     const {email, password} = contact
     const navigate = useNavigate()

 

 
 const handleChange = (event)=>{
     const {name, value} = event.target
     setContact ((preValue)=>{  
     return {
     ...preValue,
     [name]: value
     }
     })
 }
 const handleSubmit = async(event) =>
 {
     event.preventDefault();


     if (email === "")
     {
        alert("fields are empty, please enter email and password")
        return;
     }

     if (password === "")
     {
        alert("fields are empty, please enter email and password")
        return;
     }
    

     try{
         const {user} = await signinAuthUserWithEmailAndPassword(email,password);
         setCurrentUser(user)
         navigate('/profile')

     }
     catch(error){
         console.log('error in login', error.message)
         alert(error.message)
     }
 }



 return <div className= 'header-div'>

    <p style={{position: "absolute", top: "215px", left: "500px", fontSize: "14px"}}>Your Email</p>
    <Input
    name= 'email'
    type= 'text'
    placeholder ='email'
    onChange = {handleChange}
    value = {contact.email}
    />

    <br></br>

    <p style={{position: "absolute", top: "283px", left: "500px", fontSize: "14px"}}>Your Password</p>
    <Input 
    name='password'
    type= 'password'
    placeholder ='password'
    onChange = {handleChange}
    value = {contact.password}
    />

    <br></br>

    <button style={{ width: "600px", position:"absolute", top: "375px", left:"499px"}} className="buttonUse" onClick={handleSubmit}>
     Sign in
    </button>
    <br></br>
     <button style={{position: "relative", top: "283px", width:"600px", left: "0px"}} className="buttonGoogle" type="submit3" onClick={logGoogleUser}>
         Log in with Google
     </button>
    <br></br>
    <br></br>

    <ul className="buttoncreation2">
    <NavLink style={{position: "relative", top: "-120px", width:"90px", left: "200px"}} className="buttonSignUp" type="submit2" to='/signup'>
     Sign up
    </NavLink>  
    </ul>

 </div>

}
export default Login;