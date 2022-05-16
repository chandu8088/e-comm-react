import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if(auth){
            navigate('/')
        }
    })
    const handleLogin =async ()=>{
        let result = await fetch('https://e-commerse-chandra.herokuapp.com/login',
        {
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json()
        //console.log(result)
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result))
            navigate('/')
        }
        else{
            alert("username or password wrong")
        }
    }
    return(<div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="email" className="inputBox" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
        <input type="password" placeholder="password" className="inputBox" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
        <button onClick={handleLogin} className="register-button" type="button">Login</button>
    </div>)
}
export default Login;