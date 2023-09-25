import {useState} from 'react';
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/search";
import Header from "./components/Header";
import './style.css';

const App=()=>{
  const [notes,setNotes]= useState([
    {
    id: nanoid(),
    text:"This is my first note!",
    date:"24/09/2023"
    }


  ]); 

  const [searchText, setSearchText] =useState('');
  
  const [darkMode,setDarkMode]=useState(false);


  const addNote=(text) =>{

    const date= new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }

    const newNotes=[...notes,newNote]
    setNotes(newNotes);
    
  }

  const deleteNote =(id) => {
    const newNotes=notes.filter((note) => note.id !==id);
    setNotes(newNotes); 
  }


  return (

    <div className={`body ${darkMode ? 'dark-mode':""}`}>
      <div className="container">
      <Header  darkMode={darkMode} handleDarkMode={setDarkMode}/>

      <Search handleSearchNote={setSearchText} />

      <NotesList 
    
        notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  
    
  );
};

export default App;