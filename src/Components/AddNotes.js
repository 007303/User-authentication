import React from 'react'
import axios from 'axios'
import NotesForm from './NotesForm'
const AddNotes=(props)=>{
    const {addNote}=props
    const formSubmission=(data)=>{
        axios.post("http://dct-user-auth.herokuapp.com/api/notes",data,{
            headers:{
                "x-auth":localStorage.getItem('token')
            }
        })
             .then((response)=>{
                 const result=response.data
                 addNote(result)
             })
             .catch((error)=>{
                 alert(error.message)
             })
    }
    
    return(
        <div>
            <div class="col-md-4">
            <h2>Add Note</h2>
            </div>
            <NotesForm formSubmission={formSubmission} />
        </div>
    )
}
export default AddNotes