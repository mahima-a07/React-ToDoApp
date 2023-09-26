import React,{useState,useRef} from 'react';

const AddNote= ( {handleAddNote }) =>{
    const [noteText,setNoteText]=useState('');
    // const [buttonClicked,setbuttonClicked]=useState(0);
    const buttonRef=useRef(null);

    

    const handleKeyDown=(e)=>{
         if(e.keyCode ===13){
            
             e.preventDefault();
             buttonRef.current.click();
         }
     };

    const characterLimit=200;

    const handlechange= (event) => {
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
        }
            


    };

    const handleSaveClick= () => {

       

        if(noteText.trim().length> 0){
            handleAddNote(noteText);
            setNoteText('');
            // setbuttonClicked(buttonClicked+1);

        }

       

    };

    return (
    <div className="note new">
        <textarea 
        rows="8" 
        cols="10" 
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handlechange}
        onKeyDown={handleKeyDown} 
        >

        </textarea>

        <div className="note-footer">
            <small>{characterLimit-noteText.length} Remaining</small>
            <button className='save dark' onClick={handleSaveClick} ref={buttonRef}>Save</button>
        </div>
    </div>);
};


export default AddNote;