import React from 'react';

const Footer = () => {
    
    const root = {
        marginTop: '20px',
        color: "red",
    }
    return (
        <footer style={root}>
            &copy; Goose Productions {new Date().getFullYear()}
        </footer>
    );
    
}

export default Footer;