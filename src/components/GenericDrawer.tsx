import React from 'react';
import { FunctionComponent, useState } from 'react';

import { Box, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

import { IGenericDrawer } from '../interface/IEvent';
import ProjectForm from '../components/ProjectForm'
import EventForm from '../components/EventForm'
import TaskForm from '../components/TaskForm'

const GenericDrawer: FunctionComponent<IGenericDrawer> = (props) => {

    return(

        <React.Fragment>
        
            <Drawer
                sx={{ }} 
                open={props.open} 
                anchor="right"
                >

                <Box sx={{width:700}}>
                    <Box sx={{ 
                        padding:"35px",
                        backgroundColor:"#e9e9e9",
                        
                        }}>
                        <Grid container spacing={2}>
                            <Grid xs={9}>
                                <Typography variant="h5">
                                    {props.componentHeading}
                                </Typography>
                            </Grid>
                            <Grid xs={3}>
                                <Stack spacing={2} direction="row" sx={{float:"right"}}>
                                    <Button variant="text" onClick={() => props.toggleDrawer("","")}>Close</Button>
                                </Stack>   
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        {(props.component === "ProjectForm") && (<ProjectForm addProject={props.addProject!} />)}
                        {(props.component === "EventForm") && (<EventForm 
                            addEvent={props.addEvent!}
                            eventId={props.eventId!}
                            componentAction={props.componentAction!} />)}                   
                        {(props.component === "TaskForm") && (<TaskForm 
                            eventId={props.eventId!} 
                            taskId={props.taskId!}
                            addTask={props.addTask!}
                            componentAction={props.componentAction!} />)}                   
                    </Box>
                </Box>
                
            </Drawer>
        </React.Fragment>
    );
};

export default GenericDrawer;