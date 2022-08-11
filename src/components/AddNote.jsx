import { useState } from "react";

// We create a new component.
//  We destructure the prop handleAddNote.
export default function AddNote({ handleAddNote }) {

  // We use the useState hook to save the value, to add a new note. We default it to an empty string, since that's what we want, our text box to start off.
  const [noteText, setNoteText] = useState('');

  // We create this function, we pass the event as an argument, this gets passed to our function
  const handleChange = (e) => {
    // The target.value is the value of the text area, in other words what the user has typed. So now our state will get updated every time the value of the text area changes when the user types.
   setNoteText(e.target.value);
  }
  
  // With this function, the state gets updated with the new note.
  // Whenever handleSaveClick gets called by the button, we want to call handleAddNote, and we'll pass in the text of the note, in this case is our note text variable that we stored in state.
  const handleSaveClick = () => {
   handleAddNote(noteText);
  }
  
  // Container div for the component new note
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10 "
        placeholder="Type to add a note..."
        // This value give us a bit more control over what the text area value is
        value={noteText} 
        // We update the value with onChange
        onChange={handleChange}
      ></textarea>

       {/* Container div for the footer */}
      <div className="note-footer">
        <small>Something</small>

        {/* The button it's gonna triggers the event that saves the note */}
        {/* With onClick, we want to save the note when the user clicks the save buttons */}
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}
