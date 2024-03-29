import React from 'react'
import { FunctionComponent, useState, useEffect } from 'react'
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IEventFormComponent } from '../interface/IEvent'

import api from '../api/Event';

const EventForm: FunctionComponent<IEventFormComponent> = (props) => {

    const [stateName, setStateName] = useState('');
    const [stateDescription, setStateDescription] = useState('');
    const [stateEventId, setStateEventId] = useState(0);

    const onNameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setStateName(event.currentTarget.value);
    };

    const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setStateDescription(event.currentTarget.value);
    };

    useEffect(()=>{
        console.log(props.eventId);
        if(props.componentAction === "Add"){
            setStateName("");
            setStateDescription("");
            setStateEventId(0);
        }
        else{
            let task = api.EventDetails(props.eventId);
            setStateName(task.name);
            setStateDescription(task.description);
            setStateEventId(props.eventId);
        }
        
    }, [])

    return (
        <React.Fragment>
            <Box component="form" sx={{
                padding:"15px",
                '& .MuiTextField-root': { marginBottom:1.5 },
                }}>

                <TextField 
                    sx={{mb:2}}
                    id="outlined-basic" label="Name" variant="outlined" 
                    fullWidth
                    onChange={onNameChange}
                    value={stateName}
                />

                <TextField
                    sx={{mb:2}}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={2}
                    fullWidth
                    onChange={onDescriptionChange}
                    value={stateDescription}
                    />

                <Stack spacing={2} direction="row">
                    <Button variant="text" 
                        onClick={() => props.addEvent({
                            eventId:stateEventId,
                            name:stateName, 
                            description:stateDescription,
                            })}>
                                {props.componentAction === "Add" ? "Add" : "Update"}
                            </Button>
                </Stack>
            </Box>
        </React.Fragment>
    )
};

export default EventForm;