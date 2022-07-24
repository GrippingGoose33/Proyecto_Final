import React, { useState } from 'react';
import Calendar from "react-calendar";
import './Calendar.css';
import 'react-calendar/dist/Calendar.css';

const Calendario = () => {
    const[date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date)
    }
    return (
        <div className = "dmy">
            <Calendar onChange={onChange} value={date} />
        </div>
    );
}

export default Calendario;