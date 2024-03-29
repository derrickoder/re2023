
import React from 'react';
import { FunctionComponent } from 'react'
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { TimelineEventComponentProps } from '../interface/IEvent';
//import '../css/TimelineEvent.css'

const TimelineEvent : FunctionComponent<TimelineEventComponentProps> = (props) => {

    // const Item = styled(Paper)(({ theme }) => ({
    //     ...theme.typography.body2,
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     height: 100,
    //     width:100,
    //     padding:5,
        
    // }));

    return (
        <React.Fragment>

        <Card 
            sx={{ 
                maxWidth: 225, 
                margin: 1, 
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                }}>

        <CardHeader
            sx={{backgroundColor:"lightBlue"}}
            
            // avatar={
            //     <Avatar sx={{ bgcolor: red[500] }} aria-label="">
            //         dg
            //     </Avatar>
            // }
            // action={
            //     <IconButton
            //         aria-label="edit"
            //         onClick={() => props.timelineEventClick(props.event.id)}>
            //         <EditSharp />
            //     </IconButton>
            // }
            
            //title={props.event.name}
            title={
                <Typography variant='subtitle2' color="text.secondary">
                    Event ID: {props.event.id}
                </Typography>
            }

            subheader={""}
        />
            <CardContent>
                <Typography variant="h6"
                    sx={{textDecoration:"underline",cursor:"pointer"}}
                    onClick={() => props.timelineEventClick(props.event.id)}>
                    {props.event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.event.description}
                </Typography>
                
            </CardContent>
        
            <CardActions disableSpacing sx={{mt: "auto"}}>
                <Stack direction="row" spacing={1}>
                    <Chip label="3 tasks" size="small" />
                    <Chip label="Active" size="small" sx={{backgroundColor:"lightGreen"}} />
                </Stack>
            </CardActions>

        </Card>

        </React.Fragment>
    );
}

export default TimelineEvent;