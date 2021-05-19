import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
const NotesForm=(props)=>{
    const {formSubmission}=props
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const [errors,setErrors]=useState({})
    const error={}
    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
    }
    const handleBodyChange=(e)=>{
        setBody(e.target.value)
    }
    if(title.length===0){
        error.title="Title cannot be blank"
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(Object.keys(error).length===0){
            const data={
                title:title,
                body:body
            }
            formSubmission(data)
            setTitle("")
            setBody("")
        
        }else{
            setErrors(error)
        }
        
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div class="col-md-3">
                <input type="text" value={title} onChange={handleTitleChange} placeholder='Title' class="form-control" aria-label="Title"/><br/>
                {errors.title&&<span style={{color:"red"}}>{errors.title}</span>}<br/>
                </div>
                <div class="col-md-3">
                <textarea value={body} onChange={handleBodyChange} placeholder="Body" class="form-control" aria-label="Body"></textarea><br/>
                </div>
                <div class="col-auto">
                <input type="submit" value="save" class="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}
export default NotesForm