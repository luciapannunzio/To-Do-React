// Components
import Note from "./Note";
import AddNote from "./AddNote";

// Destructure the props to get the notes I passed.
//  Destructure the prop handleAddNote, to get access to that function via the props.
// Destructure from the props the delete function.
export default function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-list">
      {/* Using map function to loop over our list and render a note component, instead of set a number of notes. We passed the function to the map function. The map function will pass the current note. For each note, we want to render a note component  */}
      {notes.map((note) => (
        
        // For each note that gets rendered, we want to pass in the text, the date, and the id as props to the note component. We create those props.
        <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
      ))}

      {/* We render the component AddNote, the reason to put it here, is because we want it to be part of the css grid, so that it flows nicely along with the other notes  */}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
}

// Prop drilling, the process of passing things through components until it gets where it's needed, (also called "threading") refers to the process you have to go through to get data to parts of the React Component tree.