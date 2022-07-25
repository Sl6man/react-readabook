import React from "react"
import {Card,OverlayTrigger, Tooltip, Button, Alert} from "react-bootstrap";
import URL from "../../URL";
export default function CardComp(props){
    const renderTooltip = (prop) => (
        <Tooltip {...prop}>
          {props.title}
        </Tooltip>
      );
    

    const buttonHandler = ()=>{
        // check type of the command
        if(props.cardType == "اضافة"){
            URL.post('/addBook/api',{
                ...props,
                token : localStorage.getItem('token')
            }).then(res=>{
                if(!res.data.add){
                    props.setIsAdded(false)
                    props.setIsThere(true)
                }else{
                    props.setIsThere(false)
                    props.setIsAdded(true)
                }
            })
        }else if(props.cardType === "البدء في القراءة"){
            URL.post('/reading/api', {
                ...props,
                token: localStorage.getItem('token')
            }).then(res=>{
                if(res.data.add){
                    props.setIsAdded(true)
                    props.setDeleted(false)
                    props.setDisplay('none')
                    const card = document.getElementsByClassName(`${props.mongoId}`)
                    card[0].style.display = 'none'
                }
            })
        } else if(props.cardType === "تم الانتهاء من الكتاب"){
            URL.post('/finished/api', {
                ...props,
                token: localStorage.getItem('token')
            }).then(res=>{
                if(res.data.add){
                    props.setIsAdded(true)
                    props.setDeleted(false)
                    props.setDisplay('none')
                    const card = document.getElementsByClassName(`${props.mongoId}`)
                    card[0].style.display = 'none'
                }
            })
        }
    }

    const deleteCard = ()=>{
        URL.post('/deleteBook/api', {
            mongoId :props.mongoId,
            token : localStorage.getItem('token')
        }).then(res=>{
            if(res.data.delete){
                props.setIsAdded(false)
                props.setDeleted(true)
                props.setDisplay('none')
                const card = document.getElementsByClassName(`${props.mongoId}`)
                card[0].style.display = 'none'
            }
        })
    }
    const calc = (props.bookProgress / props.pageCount) * 100
    const cardWidth = (props.progress? "100%": '')
    return(
        <>
        <Card bg="dark" style={{minWidth:`${cardWidth}`}} className={`mb-4 card-book ${props.mongoId}`}>
            <Card.Body>
                <OverlayTrigger delay={{ show: 250, hide: 400 }} overlay={renderTooltip} placement="top">
                    <Card.Title style={{borderBottom:'#6B62FF 1px solid', whiteSpace:"nowrap" , overflow:"hidden", textOverflow:"ellipsis"}}>
                        {props.title}
                    </Card.Title>
                </OverlayTrigger>
                <Card.Text style={{whiteSpace:"nowrap" , overflow:"hidden", textOverflow:"ellipsis"}}>
                    اسم الكاتب: {props.author}
                </Card.Text>
                <Card.Text>
                    عدد الصفحات: {props.pageCount}
                </Card.Text>
                <Card.Text>
                    اللغة : {props.language}
                </Card.Text>
                <Card.Text>
                    تاريخ النشر : {props.date}
                </Card.Text>
                {/* <Card.Text>
                    تاريخ اضافة الكتاب : {props.createAt}
                </Card.Text> */}
                {props.pageCount !== 'لا يوجد'?<Card.Text>{props.progress? <> <input onChange={e=> props.setProgress(e.target.value+ ' ' + props.mongoId)} className="progress-input" type="number"/> <div className="progress-container"><div className="progress" style={{width:`${calc}%`}}></div></div></>: ''}</Card.Text>:''}
            </Card.Body>
            <Card.Footer>
                {props.cardType !== false?<Button variant="primary" onClick={buttonHandler}>{props.cardType}</Button>:''}
                {props.list? <Button variant="danger" onClick={deleteCard}>حذف</Button>:''}
            </Card.Footer>
        </Card>
        </>

    )
}
