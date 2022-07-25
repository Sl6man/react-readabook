import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Button , Form, Alert, Spinner} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login(){
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [auth, setAuth] = React.useState(false)
    const [notAuth, setNotAuth] = React.useState(true)

    const [loading, setLoading] = React.useState(false)

    const navigate = useNavigate()

    axios.defaults.withCredentials = true

    const handleTheSubmit = async(e)=>{
        // to start button loading
        setLoading(true)
        // send the data to the back end
        axios.post('http://localhost:3001/login/api',{
            username:username,
            password: password
        }).then((res)=>{
            if(res.data.auth){
                setAuth(true)
                setNotAuth(true)
                setLoading(false)
                localStorage.setItem('token', res.data.token)
                navigate('/home')
            } else{
                setNotAuth(false)
                setLoading(false)
            }
        })
    }
    
    return(
        <Form style={{width:"60%", marginTop:"3.5rem",}}>
            {!notAuth?<Alert variant="danger">اسم المستخدم او كلمة المرور خطأ</Alert>: ''}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>اسم المستخدم</Form.Label>
                {/* to save the username  */}
                <Form.Control type="text" placeholder="ادخل اسم المستخدم" onChange={(e)=>setUsername(e.target.value)}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>كلمة المرور</Form.Label>
                {/* to save the password */}
                <Form.Control type="password" placeholder="ادخل كلمة المرور" onChange={e=>setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary"  onClick={handleTheSubmit}>
                {loading?                
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />: ''}
                Submit
            </Button>
        </Form>
    )
}
{/* <Button variant="primary" disabled>
    <Spinner
    as="span"
    animation="grow"
    size="sm"
    role="status"
    aria-hidden="true"
    />
    Loading...
</Button> */}