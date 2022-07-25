import React from "react";
import { useNavigate } from "react-router-dom"


export default function Navbar(){
    const navigate = useNavigate()
    const homePage = ()=>{navigate('/home')}
    const getPage = ()=>{
        navigate('/booklist')
    }
    const readingPage = ()=>{
        navigate('/readingBooks')
    }
    const finishedPage = ()=>{
        navigate('/finished')
    }
    return(
        <nav className="navbar" >
            <ul>
                <li><h1 onClick={homePage}>اقرا كتابك</h1></li>
                <li><p onClick={getPage}>قائمة الكتب</p></li>
                <li><p onClick={readingPage}>جاري القراءة</p></li>
                <li><p onClick={finishedPage}>مكتملة القراءة</p></li>
                <li></li>
            </ul>
        </nav>
    )
}