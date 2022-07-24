import React, { useState } from 'react';
import './Cronometro.css';
import Settings from './Settings';
import SettingsConstext from './SettingsConstext';
import Timer from './Timer';

function Cronometro(props) {
    const[showSettings, setShowSettings] = useState(false);
    const[workMinutes,setWorkMinutes] = useState(45);
    const[breakMinutes,setBreakMinutes] = useState(15);

    return (
        <main className="Cronos">
            <SettingsConstext.Provider value={{
                workMinutes,
                breakMinutes,
                setWorkMinutes,
                setBreakMinutes,
                showSettings,
                setShowSettings,
            }}>
            {
                showSettings ? <Settings/> : <Timer/>
            }
            </SettingsConstext.Provider>
        </main>
    );
}

export default Cronometro;