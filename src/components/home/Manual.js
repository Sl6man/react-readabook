import URL from "../../URL";
import React from "react"
import {Button, Alert} from "react-bootstrap"


export default function Manual(){
    React.useEffect(()=>{

        const scrollHandler = ()=>{
            const nav = document.querySelector('nav')
            const sticky = nav.offsetTop;
            if (window.pageYOffset > 200) {
                nav.classList.add("sticky")
            } else {
                nav.classList.remove("sticky");
            }
        }
        
        window.addEventListener('scroll', scrollHandler)
    })
    
    
    const [isAdded, setIsAdded] = React.useState(false)
    const [isThere, setIsThere] = React.useState(false)
    const [isFilled, setIsFilled] = React.useState(true)
    const [title, setTitle] = React.useState(null)
    const [author, setAuthor] = React.useState(null)
    const [pageCount, setPageCount] = React.useState(null)
    const [date, setDate] = React.useState(null)
    const [language, setLanguage] = React.useState('ar')

    const buttonHandler = (e)=>{
        if(title == null || author == null || pageCount == null){
            return (
                setIsFilled(false),
                setIsThere(false),
                setIsAdded(false)
                )
        }else{
            URL.post('/addBook/api', {
                title,
                author,
                pageCount,
                date,
                language,
                token: localStorage.getItem('token'),
                id: title
            }).then(res=>{
                if(res.data.add){
                    setIsThere(false)
                    setIsAdded(true)
                    setIsFilled(true)
                }else{
                    setIsThere(true)
                    setIsAdded(false)
                    setIsFilled(true)
                }
            })
            e.preventDefault()
        }
    }
    return(
        <div className="manual-book container">
        <h1 className="underLine_h1">اضافة كتاب يدويا</h1>
        {isAdded?<Alert variant="success" style={{marginTop:'1rem'}}>تم اضافة الكتاب</Alert>:''}  
        {isThere?<Alert variant="danger" style={{marginTop:"1rem"}}>الكتاب مضاف بالفعل</Alert>:''}
        {!isFilled?<Alert variant="danger" style={{marginTop:"1rem"}}>الرجاء ادخال جميع الحقول </Alert>:''}
        <form>
        <div className="input-manual">
                <input required placeholder="اسم الكتاب" onChange={e=>setTitle(e.target.value)}/>
                <input required placeholder="اسم الكاتب" onChange={e=>setAuthor(e.target.value)}/>
                <input required placeholder="عدد الصفحات" type="number" onChange={e=>setPageCount(e.target.value)}/>
                <input required placeholder="تاريخ النشر" type="date" onChange={e=>setDate(e.target.value)}/>
                <select required placeholder="لغة الكتاب" onChange={e=>setLanguage(e.target.value)}>
                    <option value="" disabled selected>اختر لغة الكتاب</option>
                    <option>ar</option>
                    <option>en</option>
                </select>
            </div>
            <Button onClick={buttonHandler} type="submit">اضافة</Button>
            
        </form>
    </div>
    )
}