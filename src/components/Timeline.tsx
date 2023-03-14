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

const Timeline: FunctionComponent<ITimelineComponentProps> = (props) => {

    // // State
    // const[projectEvents, setProjectEvents] = useState([] as IEvent[]);

    // useEffect(()=>{
    //     const projectEventsData = api.EventsForProject(props.projectId);
    //     setProjectEvents(projectEventsData);
    // }, [])

    return (
        <div className="event-card-container">
            {
                props.events.map(event => {
                    return(<TimelineEvent 
                        key={event.id} 
                        event={event} 
                        timelineEventClick={props.timelineEventClick} />)
                })
            }

<Card sx={{ maxWidth: 245, margin: 1, maxHeight: 400 }}>
                        <CardContent sx={{textAlign:"center"}}>
                            <Typography variant="body2" color="text.secondary">
                                <IconButton 
                                    aria-label="edit"
                                     onClick={() => props.toggleDrawer("TaskForm", "Add")}
                                    >
                                    <AddSharp />
                                </IconButton>
                            </Typography>
                            <Typography>Add Event</Typography>
                        </CardContent>
                    </Card>
        </div>
    );
};

export default Timeline;