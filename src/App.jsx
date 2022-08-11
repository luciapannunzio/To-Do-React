import { useState } from "react";
import { nanoid } from "nanoid";

// Components
import NotesList from "./components/NotesList";

// Style
import "./App.css";

function App() {
  // Notes list stored in state.
  // Since we're going to be actively changing this data, we're using State. Because we're working with lists, we'll store our notes in an array. We initialize a state hook by passing in a value to the use state function, each item in the array, it's going to hold certain things that we need to know about given note.
  // We create a few objects with some note data inside the array.
  const [notes, setNotes] = useState([

     // The id it's necessary once we need to delete those notes later, we create a nanoId (A tiny, secure, URL-friendly, unique string ID generator for JavaScript).
    {
      id: nanoid(),
      text: "This is my first note",
      date: "11/08/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "11/08/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "11/08/2022",
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "12/08/2022",
    },
  ]);

  // The states lives in the top level component  [notes, setNotes], here the child component add Note.jsx, doesn't know how to update the state, to solve this we need to pass a function from the parent(App.jsx), which allows the child to update the state. We create a function here, we pass it down through the components and add note.jsx can use this function to update the state in App.jsx
  // This function it's going to accept the text that the user had added.
  const addNote = (text) => {
    const date = new Date();
  //  whatever text gets passed from the addNote component.
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      // This will convert a date to whatever format that your local Country understands.
    };
    // Creating a new array that has the existing notes, and we'll add the new not at the end of this array.
    // We use spread operator, to copy the current array of notes. ANd we add our new note to the end.
    //  We do this because it's bad to mutate state.
    const newNotes = [...notes, newNote];
    // We call the setNotes function and we pass the newNotes.
    setNotes(newNotes);
  };

  return (
    
    <div className="container">

      {/* We pass the notes list variable storage to the notes list component, so that the notes list component can render each note. So we'll create a prop, equal to the notes value */}
      {/* we pass the List Note as a props, we call it handleAddNote */}
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
