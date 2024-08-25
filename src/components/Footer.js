import React from 'react';

const Footer=({ darkMode}) => {
    return(
        <div className={`footer ${darkMode ? 'footer-dark':""}`} id='footer'>
        <p>Developed by <a href='https://www.github.com/batrick-swaistan' target="_blank">NoName</a></p>
        </div>
    );

};
export default Footer;