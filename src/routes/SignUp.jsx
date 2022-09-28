import React,{useState} from 'react'
import Input from "../Input";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../Login.css'
import '../buttonuse.css'
import '../signupbutton.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase';

const SignUp = (props)=>{
     const [contact, setContact] = useState({
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
     })
    
     const {displayName, email, password, confirmPassword} = contact;
 
    console.log(contact);

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

     if (password !== confirmPassword)
     {
        alert('Passwords do not match!')
        return;
     }

     if (displayName === "")
     {
        alert("fields are empty, please enter the required fields below")
        return;
     }


     if (email === "")
     {
        alert("fields are empty, please enter the required fields below")
        return;
     }

     if (password === "")
     {
        alert("fields are empty, please enter the required fields below")
        return;
     }

     if (confirmPassword === "")
     {
        alert("fields are empty, please enter the required fields below")
        return;
     }

     try{
        const {user} = await createAuthUserWithEmailAndPassword(email, password)
        await createUserDocFromAuth (user, {displayName});
        navigate('/login')
     }
     catch(error){
         console.log('error in creating user', error.message)
         alert(error.message)
     }
 }



 return <div className= 'header-div'>

<p style={{position: "absolute", top: "150px", left: "500px", fontSize: "24px", color: "#035aa7", fontWeight: "bold" }}>Create a DEV@Deakin Account</p>


    <p style={{position: "absolute", top: "248px", left: "300px", fontSize: "14px"}}>Name*</p>
    <Input
    name= 'displayName'
    type= 'text'
    placeholder ='name'
    onChange = {handleChange}
    value = {contact.displayName}
    />

    <br></br>


    <p style={{position: "absolute", top: "316px", left: "300px", fontSize: "14px"}}>Email*</p>
    <Input
    name= 'email'
    type= 'email'
    placeholder ='email'
    onChange = {handleChange}
    value = {contact.email}
    />

    <br></br>

    <p style={{position: "absolute", top: "386px", left: "300px", fontSize: "14px"}}>Password*</p>
    <Input 
    name='password'
    type= 'password'
    placeholder ='password'
    onChange = {handleChange}
    value = {contact.password}
    />

    <br></br>


    <p style={{position: "absolute", top: "453px", left: "300px", fontSize: "14px"}}>Confirm Password*</p>
    <Input 
    name='confirmPassword'
    type= 'password'
    placeholder ='confirm password'
    onChange = {handleChange}
    value = {contact.confirmPassword}
    />


    <br></br>

    <button style={{ width: "600px", position:"absolute", top: "535px", left:"499px"}} className="buttonUse" onClick={handleSubmit}>
     Create
    </button>

    <br></br>

    <ul className="buttoncreation2">
    <NavLink style={{position: "relative", top: "-150px", width:"90px", left: "200px"}} className="buttonSignUp" type="submit2" to='/login'>
     Log In
    </NavLink>  
    </ul>
    

 </div>

}
export default SignUp;