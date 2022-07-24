import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
const Header = (props) => {

    const {title, url} = props;

    function clock() {
        let now = new Date().toLocaleTimeString();
        
        return <span>{now}</span>;
    }
    
    useEffect(() => {
        setInterval(() => {
          }, 1000);
    })


        return (
            <header className="App-header">
            <div className="App-header-logo">
                <a href={props.url}>
                <img src="http://assets.stickpng.com/thumbs/58718a527b7f6103e35c6ce5.png" className="App-logo" alt="logo" />
                </a>
                <h1>{props.title}</h1>
                
                <li><Link to={`/calendar`} className="App-link">Fecha</Link></li>
                {
                    clock()
                    
                }
            </div>

            <ul>
                <li><Link to={`/`} className="App-link">Inicio</Link></li>
                <li><Link to={`/calculadora`} className="App-link">Calculadora</Link></li>
                <li><Link to={`/cronometro`} className="App-link">Pomodoro</Link></li>
            </ul>

          </header>
        );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;