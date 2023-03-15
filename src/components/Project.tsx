import React from 'react';
import { FunctionComponent, useState, useEffect } from 'react'
import { Box, CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import EditSharp from '@mui/icons-material/EditSharp';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { red, blue, yellow } from '@mui/material/colors';

import { IProjectComponentProps, IEvent, IEventDetails, ITask, IAddTaskMethodInput, IEventFormData } from '../interface/IEvent'

import Timeline from '../components/Timeline'
import Event from '../components/Event'
import api from '../api/Event';
import GenericDrawer from '../components/GenericDrawer';

const Project: FunctionComponent<IProjectComponentProps> = (props) => {

    // State
    const [stateShowEvent, setStateShowEvent] = useState(false);
    const [stateEventData, setStateEventData] = useState({} as IEventDetails);
    const [stateSelectedEventId, setStateSelectedEventId] = useState(0);
    const [stateEventTaskData, setStateEventTaskData] = useState([] as ITask[]);
    const [stateSelectedTaskId, setStateSelectedTaskId] = useState(0);
    const [stateProjectEventData, setStateProjectEventData] = useState([] as IEvent[]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [componentDrawer, setComponentDrawer] = useState("");
    const [componentDrawerAction, setComponentDrawerAction] = useState("new");

    useEffect(()=>{
        const projectEventsData = api.EventsForProject(props.projectId);
        setStateProjectEventData(projectEventsData);
    }, [])

    // Methods
    const onTimelineEventClick = (id:number) => {
        let eventData = api.EventDetails(id);
        let tasksData = api.TasksForEvent(id);
        setStateEventData(eventData);
        setStateEventTaskData([...tasksData]);
        setStateShowEvent(true);
    };

    const onHideEvent = () => {
        setStateShowEvent(false);
    };

    const onAddEvent = (formData:IEventFormData) => {
        if(formData.eventId === 0){
            const newEvent = { 
                id: 5,
                name: formData.name,
                description: formData.description,
                tasks: []};
            setStateProjectEventData([...stateProjectEventData, newEvent]);
        }
        else{
            const updatedEvents = stateProjectEventData.map(event => {
                if(event.id === formData.eventId){
                    return {
                        ...event,
                        name: formData.name,
                        description: formData.description
                    }
                }
                else{
                    return event;
                }
            });
            setStateProjectEventData(updatedEvents);
        }

        
        // onToggleDrawer("event", "add");
    };

    const onAddTask = (input:IAddTaskMethodInput) => {
        if(input.TaskId === 0){
            const nextTaskId = stateEventTaskData.length + 1;
            const newTask = {
                users: [{id:1, email:"test@test.com"},{id:2, email:"test2@test.com"}], 
                eventId: input.EventId, 
                id:nextTaskId, 
                name: input.TaskName,
                description: input.TaskDescription
            };
            setStateEventTaskData([...stateEventTaskData, newTask]);
        }
        else{
            const updatedTasks = stateEventTaskData.map(task => {
                if(task.id === input.TaskId){
                    return {
                        ...task,
                        name: input.TaskName,
                        description: input.TaskDescription
                    }
                }
                else{
                    return task;
                }
            });
            setStateEventTaskData(updatedTasks);
        }
        
            
    };

    const onEditTask = (taskId:number) => {
        setStateSelectedTaskId(taskId)
        setComponentDrawerAction("edit");
        setComponentDrawer("TaskForm");
        setOpenDrawer(!openDrawer);
    };

    const onEditEvent = (eventId:number) => {
        setStateSelectedEventId(eventId);
        setComponentDrawerAction("edit");
        setComponentDrawer("EventForm");
        setOpenDrawer(!openDrawer);
    };

    const onToggleDrawer = (component:string, componentAction:string) => {
        setComponentDrawer(component);
        setComponentDrawerAction(componentAction);
        setOpenDrawer(!openDrawer);
    };

    return(
        <React.Fragment>

            <Box sx={{backgroundColor:"white",padding:2}}>
                <Box sx={{backgroundColor:"white",padding:1,margin:1}}>

                    <Paper 
                        elevation={1}
                        sx={{backgroundColor:"white",padding:2}}>
                        <Typography variant='subtitle2' color="text.secondary">
                            Project ID: {props.projectId}
                            <IconButton 
                                aria-label="edit"
                                //onClick={() => props.editEvent(props.event.id)}
                                >
                                <EditSharp />
                            </IconButton>
                        </Typography>
                        <Typography variant="h4">{props.projectName}</Typography>
                        <Typography>{props.projectDescription}</Typography>

                        <Box sx={{display:"flex",margin:1}}>
                            <Avatar sx={{ bgcolor: red[500], marginRight:.5 }} aria-label="">
                                dg
                            </Avatar>
                            <Avatar sx={{ bgcolor: blue[500], marginRight:.5 }} aria-label="">
                                yg
                            </Avatar>
                            <Avatar sx={{ bgcolor: yellow[700], marginRight:.5 }} aria-label="">
                                bg
                            </Avatar>
                        </Box>
                    </Paper>

                    
                    
                </Box>


                <Box sx={{backgroundColor:"#f9f9f9",padding:2,margin:1}}>
                    <Timeline 
                        projectId={props.projectId}
                        timelineEventClick={onTimelineEventClick} 
                        events={stateProjectEventData}
                        toggleDrawer={onToggleDrawer}
                    />
                    
                    {
                    stateShowEvent && (
                        <Event
                            visible={stateShowEvent}
                            event={stateEventData}
                            tasks={stateEventTaskData}
                            toggleDrawer={onToggleDrawer}
                            hideComponent={onHideEvent}
                            addTask={onAddTask}
                            editTask={onEditTask}
                            editEvent={onEditEvent}/> 
                    )}
                </Box>

                
            </Box>

            

            {/* <button onClick={() => onToggleDrawer("EventForm", "Add")}>Add Event</button> */}

            

            
                    
            <GenericDrawer 
                open={openDrawer}
                componentHeading="New Event"
                component={componentDrawer}
                componentAction={componentDrawerAction}
                toggleDrawer={onToggleDrawer} 
                addEvent={onAddEvent}
                addTask={onAddTask}
                eventId={stateEventData.id}
                taskId={stateSelectedTaskId}
                />

        </React.Fragment>
    );
}

export default Project;