import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';


import Login from "./login";
import Signup from "./signup";


export default function Register(){
    const navigate = useNavigate()
    const [loginPage, setLoginPage] = React.useState(true)

    React.useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/home')
        }
    })

    const toggleLoginPage = ()=>{
        setLoginPage(prev => !prev)
    }
    return(
        <div className="container-log">
            <motion.div className="left" animate={{opacity:1}} initial={{opacity:0}}>
                <div>
                    <h1>اقرا كتابك</h1>
                    {loginPage? <h3>تسجيل الدخول</h3>: <h3>تسجيل</h3>}
                </div>

                {loginPage? <Login/>: <Signup/>}

                {/* <h6> عندك حساب؟ <i onClick={toggleLoginPage}>تسجيل الدخول</i></h6> */}
                {!loginPage? <h6> عندك حساب؟ <i onClick={toggleLoginPage}>تسجيل الدخول</i></h6>: <h6> مستخدم جديد؟ <i onClick={toggleLoginPage}>تسجيل </i></h6>}
            </motion.div>
            <div className="rh">
                <div className="layout"></div>
            </div>
        </div>
    )
}