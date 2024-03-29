import React from 'react';
import { FunctionComponent, useState, useEffect } from 'react'
import { IEvent, ITimelineComponentProps } from '../interface/IEvent'
import TimelineEvent from './TimelineEvent'
import '../css/Timeline.css'
import api from '../api/Event';

import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import EditSharp from '@mui/icons-material/EditSharp';
import AddSharp from '@mui/icons-material/AddSharp';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const Timeline: FunctionComponent<ITimelineComponentProps> = (props) => {

    // // State
    // const[projectEvents, setProjectEvents] = useState([] as IEvent[]);

    // useEffect(()=>{
    //     const projectEventsData = api.EventsForProject(props.projectId);
    //     setProjectEvents(projectEventsData);
    // }, [])

    return (
        <React.Fragment>

            <Stack spacing={1} direction="row">
                            <Typography variant="h5" sx={{marginRight:1}}>
                                Events
                            </Typography>
                            {/* <Button variant="outlined" onClick={() => props.toggleDrawer("EventForm", "Add")}>Add Event</Button> */}
                            <Button variant="outlined" onClick={() => props.timelineEventClick(0)}>Add Event</Button>
                        </Stack>

            <Divider sx={{marginTop:2,marginBottom:1}} />

            <Box className="event-card-container">


                {
                    props.events.map(event => {
                        return(<TimelineEvent 
                            key={event.id} 
                            event={event} 
                            timelineEventClick={props.timelineEventClick} />)
                    })
                }

                {/* <Card 
                    sx={{ 
                        margin: 1, 
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                    }}
                    onClick={() => props.toggleDrawer("EventForm", "Add")}
                >
                    <CardContent sx={{textAlign:"center"}}>
                        <Typography variant="body2" color="text.secondary">
                            <IconButton 
                                aria-label="add" onClick={() => props.toggleDrawer("EventForm", "Add")}>
                                <AddSharp />
                            </IconButton>
                        </Typography>
                        
                    </CardContent>
                </Card> */}
            </Box>

        </React.Fragment>

    );
};

export default Timeline;