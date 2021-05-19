import React from 'react'
import axios from 'axios'
import swal from 'sweetalert'
const NotesItem=(props)=>{
    const{title,body,_id,deleteNote}=props
    const handleDelete=(_id)=>{
        console.log(_id)
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
                 .then((response)=>{
                     const result=response.data
                     console.log(response.data)
                     deleteNote(result._id)
                 })
                 .catch((error)=>{
                     alert(error.message)
                 })
        }
    const handleData=(_id)=>{
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
             .then((response)=>{
                 const result=response.data
                 swal({
                    title: result.title,
                    text: result.body,
                    closeOnClickOutside: false,
                  })
                 
             })
             .catch((error)=>{
                 alert(error.message)
             })
    }
    return(
        <div>
            <div class="col-12">
            <h3 onClick={()=>{handleData(_id)}}>{title}</h3>
            </div>
            <div class="col-12">
            <button onClick={()=>{handleDelete(_id)}} class="btn btn-primary">Delete</button>
            </div>
            
        </div>
    )
}
export default NotesItem