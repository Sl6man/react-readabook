import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate()
    React.useEffect(()=>{
        navigate('/login')
    })
    return(
        <></>
    )
}