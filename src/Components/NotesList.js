import React from 'react'
import NotesItem from './NotesItem'
const NotesList=(props)=>{
    const {notes,deleteNote}=props
    console.log(props)
    return(
        <div>
            {notes.map((note,i)=>{
                return(<NotesItem key={i} {...note} deleteNote={deleteNote}/>)
            })}
        </div>
    )
}
export default NotesList