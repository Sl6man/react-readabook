import React from "react";
import axios from "axios";
import URL from "../URL";
import Navbar from "./Navbar";
import {Alert} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import image from '../imgs/thereNo.svg'


import CardComp from "./cards/card"

import '../list.css'
import GetBooks from "./getBooks";

export default function Finished(props){
    const navigate = useNavigate()
    React.useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    })
    const [bookData, setBookData] = React.useState()
    const [bookLength, setBookLength] = React.useState()
    React.useEffect(()=>{

            URL.get('/finished/api', {
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }).then(res=>{
                    if(res.data.length > 0){
                        setBookData(res.data)
                        setBookLength(res.data.length)
                    }else{
                    }
            }).catch(e=> console.log(e))
    },[])


    return(
        <div>
            <Navbar/>
            <div className="container">
                <h2 className="underLine_h1" style={{paddingBottom:'.5rem'}}>عدد الكتب المنتهي منها <span style={{color:"#FF6584"}}>{bookLength}</span></h2>
                <GetBooks pageType={false} bookData={bookData} />
            </div>
        </div>
    )
}