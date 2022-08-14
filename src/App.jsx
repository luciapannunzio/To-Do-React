import { useState } from "react";
import { nanoid } from "nanoid";

// Components
import NotesList from "./components/NotesList";
import Search from "./components/Search";

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
      date: "13/08/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "15/08/2022",
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "20/08/2022",
    },
  ]);

  // State hook to store the search text
  const [searchText, setSearchText] = useState("");

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

  // We create a function to delete. This function will accept the Id of the note to be deleted. Each note in our array has an id, and when we add a new note it generates an Id as well. So we will use the filter function on the notes array. To remove the note that has the same Id, we give the current note for the condition. So the filter function returns a new array.
  const deleteNote = (id) => {
   const newNotes = notes.filter((note) => note.id !== id);
   setNotes(newNotes);
  }


  return (
    
    <div className="container">
      {/* We pass the search state function to the search component as a prop */}
      <Search handleSearchNote={setSearchText}/>

      {/* We pass the notes list variable storage to the notes list component, so that the notes list component can render each note. So we'll create a prop, equal to the notes value */}
      {/* we pass the List Note as a props, we call it handleAddNote */}
      {/* We pass the deleteNote function for delete notes */}
      {/* This function take the current list of notes, filter those notes, to return only the ones that include the search text, and the search text is what the user has typed into the search bar. It will then pass the result of this to the NotesList component as a notes prop */}
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />

    </div>
  );
}

export default App;
