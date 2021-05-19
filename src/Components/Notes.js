import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AddNotes from './AddNotes'
import NotesList from './NotesList'
const Notes=(props)=>{
    const [notes,setNotes]=useState([])
    useState(()=>{
        axios.get("http://dct-user-auth.herokuapp.com/api/notes",{
            headers:{
                "x-auth":localStorage.getItem('token')
            }
        })
             .then((response)=>{
                 const result=response.data
                 console.log(localStorage)
                 setNotes(result)
             })
             .catch((error)=>{
                 alert(error.message)
             })
    },[])
    const addNote=(data)=>{
        setNotes([data,...notes])
        console.log(notes)
    }
    const deleteNote=(id)=>{
        const filtered=notes.filter((note)=>{
            return(note._id!==id)
        })
        setNotes(filtered)
    }
    
    return(
        <div>
            <div class="col-md-4">
            <h2>My Notes-{notes.length}</h2>
            </div>
            {(notes.length===0?(
                <h2>No notes Found. Add Your first Note</h2>
            ):(
                <div>
                <NotesList notes={notes} deleteNote={deleteNote}/>
                </div>
            ))}<br/>
            <AddNotes addNote={addNote} />
        </div>
    )
}
export default Notes