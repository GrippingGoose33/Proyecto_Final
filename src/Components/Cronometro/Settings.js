import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import BackButton from './BackButton';
import SettingsConstext from './SettingsConstext';
import './slider.css';

function Settings() {
    const settingsInfo = useContext(SettingsConstext);
    return (
        <div style={{textAlign:'left'}}>
            <label>Trabajo: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
                className={'slider_work'}
                thumbClassName={'thumb_work'}
                value={settingsInfo.workMinutes}
                min={1}
                max={120}
                onChange={newValue=>settingsInfo.setWorkMinutes(newValue)}
            />

            <label>Descanso: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
                className={'slider_break'}
                thumbClassName={'thumb_break'}
                value={settingsInfo.breakMinutes}
                min={1}
                max={120}
                onChange={newValue=>settingsInfo.setBreakMinutes(newValue)}
            />
            
            <div style={{textAlign:'center', marginTop:'20px'}}>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
            </div>
        </div>
    );
}

export default Settings;