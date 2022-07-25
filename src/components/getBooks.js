import React from "react";
import axios from "axios";
import URL from "../URL";
import Navbar from "./Navbar";
import {Alert} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import image from '../imgs/thereNo.svg'


import CardComp from "./cards/card"

import '../list.css'

export default function GetBooks(props){
    const [isAdded, setIsAdded] = React.useState(false)
    const [display ,setDisplay] = React.useState('block')
    const [deleted, setDeleted] = React.useState(false)
    let cardElement;


    if(props.bookData){
        cardElement = props.bookData.map((book) => {
            return(
            <CardComp
                id={book.id}
                title={book.title}
                pageCount={book.pages}
                author={book.author}
                language={book.language}
                date={book.date}
                cardType = {props.pageType}
                list = {true}
                mongoId = {book._id}
                setIsAdded = {setIsAdded}
                setDisplay = {setDisplay}
                display = {display}
                setDeleted = {setDeleted}
                progress = {props.progress}
                bookProgress = {book.progress}
                setProgress = {props.setProgress}
            />
            )})
    }

    return(
        <>
            
            {isAdded?<Alert variant="success" style={{marginTop:'1rem'}}>تم اضافة الكتاب</Alert>:''}  
            {deleted?<Alert variant="danger" style={{marginTop:'1rem'}}>تم حذف الكتاب</Alert>:''}  
            <div className="book-container">
            {cardElement?cardElement:<img className="books-img" src={image}/>}
            </div>
        </>
    )
}