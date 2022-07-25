import { useNavigate } from "react-router-dom"
import React from "react"
import {Button, Alert} from "react-bootstrap"

import "../../home.css"
import Hero from "./Hero";
import Google from "./Google";
import Manual from "./Manual";


export default function Home(){
    const navigate = useNavigate()
    React.useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    })
    

    return(
        <div>
            <Hero /> 
            <Google/>
            <Manual/>
        </div>
    )
}