import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Button , Form, Alert} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URL from '../../URL'

export default function Signup(){
    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [notAuth, setNotAuth] = React.useState()
    const [loading, setLoading] = React.useState(false)

    const [message, setMessage] = React.useState("")

    const navigate = useNavigate()

    const submitHandler = (e)=>{
        URL.post('/signup/api', {
            email,
            username,
            password
        }).then(res=>{
            if(res.data.message === 'email exists'){
                setNotAuth(true)
                setMessage('البريد الأكتروني مسجل')
            } else if(res.data.message == 'user exists'){
                setNotAuth(true)
                setMessage("اسم المستخدم مسجلذ")
            }else{
                localStorage.setItem('token', res.data.token)
                navigate('/home')
            }
            
        }).catch(e=> console.log(e))
        e.preventDefault()
    }

    return(
        <Form style={{width:"60%", marginTop:"3.5rem",}} className="form-ani" onSubmit={submitHandler}>
            {notAuth?<Alert variant="danger">{message}</Alert>:''}
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>البريد الأكتروني</Form.Label>
            <Form.Control required type="email" placeholder="ادخل البريد الأكتروني" onChange={e=>(setEmail(e.target.value) ,setNotAuth(false))}/>
            <Form.Text className="text-muted">
            
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forText">
            <Form.Label>اسم المستخدم</Form.Label>
            <Form.Control required type="text" placeholder="ادخل اسم المستخدم" onChange={e=>setUsername(e.target.value,setNotAuth(false))}/>
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>كلمة المرور</Form.Label>
            <Form.Control required type="password" placeholder="ادخل كلمة المرور" onChange={e=>setPassword(e.target.value,setNotAuth(false))}/>
            <Form.Text className="text-muted">
            يجب أن تتكون كلمة المرور الخاصة اكبر من 5
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    )
}