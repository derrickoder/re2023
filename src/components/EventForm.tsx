import React from 'react'
import { FunctionComponent, useState } from 'react'
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IEventFormComponent } from '../interface/IEvent'

const EventForm: FunctionComponent<IEventFormComponent> = (props) => {

    const [stateName, setStateName] = useState('');
    const [stateDescription, setStateDescription] = useState('');

    const onNameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setStateName(event.currentTarget.value);
    };

    const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setStateDescription(event.currentTarget.value);
    };

    return (
        <React.Fragment>
            <Box component="form" sx={{
                padding:"15px",
                '& .MuiTextField-root': { marginBottom:1.5 },
                }}>

                <TextField 
                    id="outlined-basic" label="Name" variant="outlined" 
                    fullWidth
                    onChange={onNameChange}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={2}
                    defaultValue=""
                    fullWidth
                    onChange={onDescriptionChange}
                    />

                <Stack spacing={2} direction="row">
                    <Button variant="text" 
                        onClick={() => props.addEvent({
                            name:stateName, 
                            description:stateDescription,
                            })}>Save</Button>
                </Stack>
            </Box>
        </React.Fragment>
    )
};

export default EventForm;