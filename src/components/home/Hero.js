import React from "react";
import { Alert } from "react-bootstrap";
import home from '../../imgs/home.svg'
import Navbar from "../Navbar";



export default function Hero(){
    const scrollGoogle = ()=>{
        window.scrollTo('0','550')
    }
    const scrollManual = ()=>{
        window.scrollTo('0', '1000')
    }
    return(
        <div>
            <Navbar/>
        <header>
            <div>
                <h1>ابدا في ترتيب مكتبتك</h1>
                <h2>ابحث عن كتابك </h2>
                <div className="button-group">
                    <button className="b2" onClick={scrollGoogle}><p>اضافة كتاب من Goolge Books</p></button>
                    <button className="b1" onClick={scrollManual}><p>اضافة كتاب يدويا</p></button>
                </div>
            </div>
            <img src={home} />
        </header>
    </div>
    )
}