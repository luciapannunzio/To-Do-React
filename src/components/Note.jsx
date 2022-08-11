// Library
import { AiOutlineDelete } from "react-icons/ai";

// We destructure the props to get the things we need, id, text and date. We passed in from the notes list to the note component 
export default function Notes({ id, text, date }) {

  return (
    
    <div className='note'>
      {/* we pass our props, text and date */}
    <span>{text}</span>
    <div className="note-footer">
     <small>{date}</small>
     <AiOutlineDelete className='delete-icon' size='1.3rem'/>
     </div>
    </div>
  )
}
