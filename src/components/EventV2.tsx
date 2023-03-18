/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

import { FunctionComponent, useState, useEffect } from 'react'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import AddSharp from '@mui/icons-material/AddSharp';
import CloseSharp from '@mui/icons-material/CloseSharp';
import EditSharp from '@mui/icons-material/EditSharp';
import SaveSharp from '@mui/icons-material/SaveSharp';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CardHeader } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

import TextField from '@mui/material/TextField';

import '../css/Event.css'
import { IEventComponentProps } from '../interface/IEvent'
import TaskCard2 from './TaskCard2'
import TaskForm from './TaskForm'
import api from '../api/Event';


const EventV2 : FunctionComponent<IEventComponentProps> = (props) => {
    
    // State
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);

    const [stateName, setStateName] = useState('');
    const [stateDescription, setStateDescription] = useState('');
    const [stateTaskName, setStateTaskName] = useState('');
    const [stateTaskDescription, setStateTaskDescription] = useState('');
    const [showTaskCard, setShowTaskCard] = useState(false);
    

    

    const onNameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setStateName(event.currentTarget.value);
    };

    const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setStateDescription(event.currentTarget.value);
    };

    const onNameTaskChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setStateTaskName(event.currentTarget.value);
    };

    const onDescriptionTaskChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setStateTaskDescription(event.currentTarget.value);
    };

    const onDisplayTaskCard = (id:number) => {
        setSelectedTaskId(id);
        setShowTaskModal(true);
    };

    const onShowTask = (add:boolean,taskId:number) => {
        setShowTaskCard(true);
        setSelectedTaskId(taskId);
    };

    const onHideTaskCard = () => {
        setShowTaskCard(false);
        setSelectedTaskId(0);
    };






    useEffect(()=>{
        if(props.event.id === 0){
            setStateName("");
            setStateDescription("");
        }
        else{
            let task = api.EventDetails(props.event.id);
            setStateName(task.name);
            setStateDescription(task.description);
        }
        
    }, [])

    return(
    <React.Fragment>

        <Card sx={{ margin:1 }}>
            <CardHeader 
                sx={{backgroundColor:"lightBlue"}}
                title={
                    <Box>
                        <Typography variant='subtitle2' color="text.secondary">
                            Event ID: {props.event.id}

                            {/* <IconButton 
                                aria-label="edit"
                                onClick={() => props.editEvent(props.event.id)}>
                                <EditSharp />
                            </IconButton> */}

                            <IconButton aria-label="save"
                                onClick={() => props.addEvent!({
                                    eventId:props.event.id,
                                    name:stateName, 
                                    description:stateDescription,
                                    })}
                                >
                                <SaveSharp />
                                <Typography sx={{marginLeft:1}}>Save</Typography>
                            </IconButton>
                        </Typography>
                        <Typography variant="h6">{stateName}</Typography>
                    </Box>
                }

                action={
                    <IconButton aria-label="close" onClick={props.hideComponent}>
                        <CloseSharp />
                    </IconButton>
                }
            />
            <CardContent sx={{ }}>
                <Box sx={{margin:0,backgroundColor:"white"}}>

                {/* <Typography variant="h5">
                            {props.event.name}
                        </Typography>
                        <Typography>
                            {props.event.description}
                        </Typography> */}

                    <Box sx={{padding:1,backgroundColor:"white"}}>
                            <TextField 
                                sx={{mb:2}}
                                id="outlined-basic" label="Name" variant="outlined" 
                                fullWidth
                                value={stateName}
                                onChange={onNameChange}
                            />

                            <TextField
                                sx={{mb:2}}
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                fullWidth
                                value={stateDescription}
                                onChange={onDescriptionChange}
                                />
                    </Box>

                    <Box sx={{padding:0,backgroundColor:"white"}}>
                        
                        {!showTaskCard && (
                            <Box sx={{padding:0,backgroundColor:"#white"}}>
                                <Stack spacing={1} direction="row">
                                    <Typography variant="h5" sx={{marginRight:1}}>
                                        Tasks
                                    </Typography>

                                    {/* <Button variant="outlined" onClick={() => props.toggleDrawer("TaskForm", "Add")}>Add Task</Button> */}
                                    <Button variant="outlined" onClick={() => onShowTask(true, 0)}>Add Task</Button>
                                </Stack>
                                
                                <Divider sx={{marginTop:2,marginBottom:1}} />

                                {props.event.id !== 0 && (
                                    <div className="task-card-container">
                                        {
                                            props.tasks?.map(task => {
                                                return (
                                                    <TaskCard2
                                                        id={task.id} 
                                                        name={task.name} 
                                                        description={task.description} 
                                                        statusId={task.statusId}
                                                        editTask={props.editTask}
                                                        showTask={onShowTask}/>
                                                )
                                            })
                                        }
                                    </div>
                                )}
                                
                            </Box>
                        )}

                        {showTaskCard && (
                            

                                        <TaskForm 
                                            eventId={props.event.id}
                                            taskId={selectedTaskId}
                                            addTask={props.addTask}
                                            componentAction={(selectedTaskId === 0) ? "Add" : "Edit"}
                                            hideTask={onHideTaskCard}
                                            />
                                        
                                    
                        )}

                    </Box>
                </Box>
            </CardContent>
        </Card>
    </React.Fragment>
    );
};

export default EventV2;