import React from "react";
import URL from "../../URL"
import { Button,Alert, Spinner, Card} from "react-bootstrap";
import axios from "axios";


import CardLoading from '../cards/cardLoding'
import CardComp from '../cards/card'

export default function Google (){
    const [search, setSearch] = React.useState("")
    const [cardLoading, setCardLoading] = React.useState(true)
    const [booksData , setBooksData]  = React.useState()
    const [isAdded, setIsAdded] = React.useState(false)
    const [isThere , setIsThere] = React.useState(false)
    const searchHandler = ()=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=8`)
        .then(res=>{
            setBooksData(res.data.items)
            setCardLoading(false)
        })
    }
    let dataElements
    if(!cardLoading){
            dataElements = booksData.map((book)=>{
            return(
                <CardComp 
                id={book.id?book.id:"لا يوجد"} 
                title={book.volumeInfo.title?book.volumeInfo.title:'لا يوجد'} 
                pageCount={book.volumeInfo.pageCount?book.volumeInfo.pageCount:"لا يوجد"}
                author = {book.volumeInfo.authors?book.volumeInfo.authors[0]:'لا يوجد'}
                language={book.volumeInfo.language}
                date={book.volumeInfo.publishedDate?book.volumeInfo.publishedDate:'لا يوجد'}
                cardType="اضافة"
                setIsAdded={setIsAdded}
                setIsThere={setIsThere}
                />
            )
        })
    }

    return(
    <div className="googleBooks container">
        <h1 className="underLine_h1">ابحث في Google Books</h1>
        <button onClick={searchHandler} className="button-google" >بحث</button>
        <input placeholder="اسم الكتاب" onChange={e=>setSearch(e.target.value)}/>
        {isAdded?<Alert variant="success" style={{marginTop:'1rem'}}>تم اضافة الكتاب</Alert>:''}
        {isThere?<Alert variant="danger" style={{marginTop:"1rem"}}>الكتاب مضاف بالفعل</Alert>:''}
        <div className="books-scroll">{cardLoading?<CardLoading/>:dataElements}</div>
    
    </div>
    )
}