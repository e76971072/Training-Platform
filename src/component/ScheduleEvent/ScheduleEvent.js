import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import React, { useState } from 'react';
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import  './ScheduleEvent.css'


// styles for elements in the schedule page
const styles = {
    root: {
        position: 'absolute', 
        width: "100%", 
        textAlign: "center", 
        alignItems: "center",
    }, 
    inner: {
        margin:'40px auto', 
        width : '70%', 
        textAlign: "center", 
        alignItems: "center", 
    }
}

// Days in array  
const  daysOfWeek = {
    Monday : 0, 
    Tuesday: 1, 
    Wednesday: 2, 
    Thursday: 3,
    Friday: 4, 
    Saturday: 5, 
    Sunday: 6  
}

 function  ScheduleEvent () {
    const [open, setOpen] = React.useState(false);
    const [timeInput, setTime] = React.useState('');
    const [dateInput, setDate] = React.useState('');
    const [titleName, setTitle] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [events, setEvents] = React.useState ([]); // holding set of events 
    const [age, setAge] = React.useState('');
    const [openSelect, setOpenSelect] = React.useState(false);

   
    const handleCloseSelect = () => {
        setOpenSelect(false);
      };
    
    const handleOpenSelect = () => {
        setOpenSelect(true);
      };

    const handleClickOpen = (e) => {
        setOpen(true);
     };

    const handleChangeSelect = (event) => {
        setAge(event.target.value);
    };
    

     function handleClose (e) {
        setOpen(false);
    };

    const handleLocation = (e) => {
        setLocation(e.currentTarget.value)
    }
    const handleTime = (e) => {
       setTime(e.currentTarget.value)
    }
    const handleTitle = (e) => {
        setTitle(e.currentTarget.value)
    }
    const handleDate = (e) => {
        setDate(e.currentTarget.value)
    }
    
    const handleEvent = (e) => {

    }
    const addEvent  = () => {
        setEvents([
            ...events,
            {
               title:  titleName,
               start:  new Date (dateInput + "T" + timeInput), 
               editable	: true, 
               color: 'rgb(200,235,253)', 
               textColor: 'black', 
               eventLimit: true,
            }
          ]);
          console.log (events)
    }

    return (
        <div 
            style ={styles.container}  
            className = "ScheduleEventContainer">
             <div 
                style= {styles.inner} 
                className= "innerContainer">
               
                <FullCalendar 
                    dateClick = {(e) => {handleClickOpen(e);}}
                    defaultView="dayGridMonth"
                    header={{
                       left: "prev,next",
                       center: "title",
                       right: "dayGridMonth,timeGridWeek,timeGridDay"
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin,interactionPlugin]}
                    events={events}
                    eventClick = {handleEvent}
                   
                /> 
              <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    ADD AN EVENT 
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Enter an event</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        To add an event for training or game schedule 
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="email"
                        onChange = {handleTitle}
                        fullWidth
                    />
                    <TextField
                        id="startDate"
                        label="Start Date"
                        type="date"
                        defaultValue="2020-05-24"
                        onChange = {handleDate}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField
                        id="endDate"
                        label="End Date"
                        type="date"
                        defaultValue="2020-05-24"
                        onChange = {handleDate}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField
                        id="time"
                        label="Time"
                        type="Time"
                        defaultValue="17:00"
                        onChange = {handleTime}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="location"
                        label="Location"
                        type="text"
                        onChange = {handleLocation}
                        fullWidth
                    />
                    {/* <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openSelect}
                            onClose={handleCloseSelect}
                            onOpen={handleOpenSelect}
                            value={age}
                            onChange={handleChangeSelect}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                    </Select> */}
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={(e) => { addEvent (e); handleClose();}} color="primary">
                        Confirm
                    </Button>
                    </DialogActions>
                </Dialog>
                </div>
             </div> 
        </div>
    )
 }

 export default ScheduleEvent; 