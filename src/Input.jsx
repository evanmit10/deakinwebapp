import React from 'react'

const Input = (props)=>{
    return <div>
       <input style={{width: "37%", height: "40px", position:"relative", top: "250px", left:"0px"}} name={props.name} type={props.type} placeholder={props.placeholder} onChange = {props.onChange}/>
    </div>

}
export default Input