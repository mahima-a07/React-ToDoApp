import React from 'react';

const Header = ({ darkMode, handleDarkMode}) =>{

    return (
        <div className='header'>
            <h1>Notes</h1>
            <button className={`dark ${darkMode? 'clicked':""}`} onClick={() => handleDarkMode(
                (prevDarkMode =>! prevDarkMode)
            )}>
                {darkMode? 'Light Mode': 'Dark Mode'}
            </button>
        </div>
    );
};

export default Header;
  