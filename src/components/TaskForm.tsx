import React from 'react'
import { FunctionComponent, useState,useEffect } from 'react'
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IAddTaskComponentProps } from '../interface/IEvent'

import api from '../api/Event';

const TaskForm: FunctionComponent<IAddTaskComponentProps> = (props) => {

    const [stateName, setStateName] = useState('');
    const [stateDescription, setStateDescription] = useState('');
    const [stateTaskId, setStateTaskId] = useState(0);

    const onNameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setStateName(event.currentTarget.value);
    };

    const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setStateDescription(event.currentTarget.value);
    };

    useEffect(()=>{
        console.log(props.eventId, props.taskId);
        if(props.componentAction === "Add"){
            setStateName("");
            setStateDescription("");
        }
        else{
            let task = api.TaskForId(props.eventId, props.taskId);
            setStateTaskId(props.taskId);
            setStateName(task.name);
            setStateDescription(task.description);
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
                    rows={4}
                    fullWidth
                    onChange={onDescriptionChange}
                    value={stateDescription}
                    />

                <Stack spacing={2} direction="row">
                    <Button variant="text" 
                        onClick={() => props.addTask({
                            EventId:props.eventId,
                            TaskId:stateTaskId,
                            TaskName:stateName, 
                            TaskDescription:stateDescription,
                            })}>Save</Button>
                </Stack>
            </Box>

        </React.Fragment>
    )
};

export default TaskForm;