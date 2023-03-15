/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

import { FunctionComponent, useState } from 'react'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import AddSharp from '@mui/icons-material/AddSharp';
import CloseSharp from '@mui/icons-material/CloseSharp';
import EditSharp from '@mui/icons-material/EditSharp';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CardHeader } from '@mui/material';



import '../css/Event.css'
import { IEventComponentProps } from '../interface/IEvent'
import TaskCard2 from './TaskCard2'


const Event : FunctionComponent<IEventComponentProps> = (props) => {
    
    // State
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);

    // Functions
    const onDisplayTaskCard = (id:number) => {
        setSelectedTaskId(id);
        setShowTaskModal(true);
    };

    return(
    <React.Fragment>


        <Card sx={{ margin:1 }}>
            <CardHeader 
                sx={{backgroundColor:"#e9e9e9"}}
                title={
                    <Box>
                        <Typography variant='subtitle2' color="text.secondary">
                        Event ID: {props.event.id}
                            <IconButton 
                                aria-label="edit"
                                onClick={() => props.editEvent(props.event.id)}>
                                <EditSharp />
                            </IconButton>
                        </Typography>
                        <Typography variant="h6">
                            {props.event.name}
                        </Typography>
                        <Typography>
                            {props.event.description}
                        </Typography>
                    </Box>
                }

                action={
                    <IconButton aria-label="close" onClick={props.hideComponent}>
                        <CloseSharp />
                    </IconButton>
                }
            />
            <CardContent sx={{ }}>
                <Box sx={{margin:1,backgroundColor:"white"}}>

                    <Box sx={{padding:2,backgroundColor:"white"}}>
                        <Box sx={{padding:2,backgroundColor:"#e9e9e9"}}>
                            <Typography variant="h5">
                                Tasks
                            </Typography>

                            <div className="task-card-container">
                                {
                                    props.tasks?.map(task => {
                                        return (
                                            <TaskCard2
                                                id={task.id} 
                                                name={task.name} 
                                                description={task.description} 
                                                editTask={props.editTask}/>
                                        )
                                    })
                                }

                                <Card 
                                    sx={{ 
                                        margin: 1, 
                                        justifyContent: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                    onClick={() => props.toggleDrawer("TaskForm", "Add")}
                                >
                                    <CardHeader />
                                    <CardContent sx={{textAlign:"center"}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <IconButton 
                                                aria-label="edit"
                                                >
                                                <AddSharp />
                                            </IconButton>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    </React.Fragment>
    );
};

export default Event;