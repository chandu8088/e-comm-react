import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
const Signup = ()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    const collectData =async ()=>{
        let result = await fetch('https://e-commerse-chandra.herokuapp.com/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result= await result.json();
        console.log(result)
        localStorage.setItem("user",JSON.stringify(result))
        if(result){
            navigate('/')
        }
    }
    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if(auth){
            navigate('/')
        }
    })
    return(
        <div className="register">
            <h1>Register Here</h1>
            <input className="inputBox" value={name} type="text"
            onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className="inputBox" value={email} type="text"
            onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="inputBox" value={password} type="text"
            onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <button onClick={collectData} className="register-button" type="button">Sign Up</button>
        </div>
    )
}
export default Signup;