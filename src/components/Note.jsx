// Library
import { AiOutlineDelete } from "react-icons/ai";

// Destructure the props to get the things we need, id, text and date. We passed in from the notes list to the note component.
// Destructure the handle delete from the props.
export default function Notes({ id, text, date, handleDeleteNote }) {

  return (
    
    <div className='note'>
      {/* Passing our props, text and date */}
    <span>{text}</span>
    <div className="note-footer">
     <small>{date}</small>
     {/* When I click here it's gonna a delete the note, so we add onClick. We create a function and we pass the id of this note */}
     <AiOutlineDelete onClick={()=> handleDeleteNote(id)} className='delete-icon' size='1.3rem'/>
     </div>
    </div>
  )
}