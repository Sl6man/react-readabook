import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Register from "./components/register/register";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GetBooks from "./components/BookList";
import Home from "./components/home/Home";
import NotFound from "./components/notFound";
import BookList from "./components/BookList";
import ReadingBook from "./components/ReadingBook"
import Finished from "./components/Finished";

export default function App(){
    const token = localStorage.getItem('token')
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/booklist" element={<BookList/>}/>
                <Route path="/readingBooks" element={<ReadingBook/>}/>
                <Route path="/finished" element={<Finished/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    )
}