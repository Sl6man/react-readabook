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

export default function BookList(props){
    const navigate = useNavigate()
    React.useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    })
    const [bookData, setBookData] = React.useState()
    const [progress, setProgress] = React.useState('')

    React.useEffect(()=>{
        const delay = setTimeout(()=>{
            if(progress){
                URL.post('/progress/api',{
                    token: localStorage.getItem('token'),
                    progress: progress,
                }).then(res=>{
                    if(res.data.pageCount){
                        document.querySelector('.progress').style.width = `${(parseInt(progress) / parseInt(res.data.pageCount)) * 100}%`
                    }
                })
            }
        }, 300)

        return ()=>clearTimeout(delay)
    }, [progress])
    
    React.useEffect(()=>{

            URL.get('/reading/api', {
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }).then(res=>{
                    if(res.data.length > 0){
                        setBookData(res.data)
                    }else{
                    }
            }).catch(e=> console.log(e))
    },[])

    
    return(
        <div>
            <Navbar/>
            <div className="container">
                <h2 className="underLine_h1" style={{paddingBottom:'.5rem'}}>جاري القراءة</h2>
                <GetBooks pageType="تم الانتهاء من الكتاب" bookData={bookData} progress={true} setProgress={setProgress}/>
            </div>
        </div>
    )
}