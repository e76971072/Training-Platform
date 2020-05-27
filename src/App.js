import React from 'react';
import './App.css';
import ScheduleEvent from './component/ScheduleEvent/ScheduleEvent'
import Subscribe from './component/Reminder/Subscribe'
// event object contains : 
//      dateStr : 2020-05-15
//      date: Fri May 15 2020 00:00:00 GMT-0500 (Central Daylight Time)
//      allDay: true 

function App() {

  return (
    <div className="App">
       <ScheduleEvent />
       <Subscribe />
    </div>
  );
}

export default App;
