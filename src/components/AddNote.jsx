import { useState } from "react";

// Creating a new component.
//  Destructure the prop handleAddNote.
export default function AddNote({ handleAddNote }) {

  // useState hook to save the value, to add a new note. We default it to an empty string, since that's what we want, our text box to start off.
  const [noteText, setNoteText] = useState('');
  
  // Remainder characters variable.
  const characterLimit = 200;

  // Creating this function, passing the event as an argument, this gets passed to our function.
  const handleChange = (e) => {
    // We subtracts the length of the value that the user has typed from the character limit, if this value is greater or equal to 0 thats mean that the limit hasn't been reached. So we update state with the new value that the user typed. So we get the value from the event(e.target.value). 
      // The target.value is the value of the text area, in other words what the user has typed. So now our state will get updated every time the value of the text area changes when the user types.
    if(characterLimit - e.target.value.length >= 0) { 
   setNoteText(e.target.value);
  }
}
  
  // With this function, the state gets updated with the new note.
  // Whenever handleSaveClick gets called by the button, we want to call handleAddNote, and we'll pass in the text of the note, in this case is our note text variable that we stored in state.
  const handleSaveClick = () => {
    // We want to check if the value that user has typed is valid before we save it to state. The trim function removes white space from the start and the end of a string.
    if(noteText.trim().length > 0) {
            // If there is a value it's going to get added to state and our input should reset.
      handleAddNote(noteText);
      setNoteText('');
    }
  }
  
  // Container div for the component new note.
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10 "
        placeholder="Type to add a note..."
        // This value give us a bit more control over what the text area value is.
        value={noteText} 
        // Updating the value with onChange.
        onChange={handleChange}
      ></textarea>

       {/* Container div for the footer */}
      <div className="note-footer">
        {/* This subtraction will give us the characters remaining if the limit is 200 characters */}
        <small>{characterLimit - noteText.length}</small>

        {/* The button it's gonna triggers the event that saves the note */}
        {/* With onClick, we want to save the note when the user clicks the save buttons */}
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}