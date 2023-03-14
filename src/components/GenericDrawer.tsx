import React from 'react';
import { FunctionComponent, useState } from 'react';

import { Box } from '@mui/material';
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
                open={props.open} 
                anchor="right"
                >

                <Box sx={{ 
                    padding:"19px",
                    backgroundColor:"#d9d9d9",
                    fontSize:"19px",
                    fontWeight:"bold",
                    height:"69px",
                    }}>
                    <Grid container spacing={2}>
                        <Grid xs={9}>
                            {props.componentHeading}
                        </Grid>
                        <Grid xs={3}>
                            <Stack spacing={2} direction="row">
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="text" onClick={() => props.toggleDrawer("","")}>Close</Button>
                            </Stack>   
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{width:"400px"}}>
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
            </Drawer>
        </React.Fragment>
    );
};

export default GenericDrawer;