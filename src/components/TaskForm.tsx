import React from 'react'
import { FunctionComponent, useState,useEffect } from 'react'
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import CloseSharp from '@mui/icons-material/CloseSharp';
import SaveSharp from '@mui/icons-material/SaveSharp';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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




    const [status, setStatus] = React.useState('');



    const onStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };




    useEffect(()=>{
        if(props.componentAction === "Add"){
            setStateName("");
            setStateDescription("");
        }
        else{
            let task = api.TaskForId(props.eventId, props.taskId);
            setStateTaskId(props.taskId);
            setStateName(task.name);
            setStateDescription(task.description);
            setStatus(String(task.statusId));
        }
        
    }, [])

    return (
        <React.Fragment>

<Box sx={{padding:0,backgroundColor:"#white",margin:1}}>
                                
                                <Card>
                                <CardHeader
                                    sx={{backgroundColor:"lightGreen"}}
                                    title={
                                        <Box>
                                            <Typography variant='subtitle2' color="text.secondary">
                                                Task ID: {props.taskId}
                    
                                                <IconButton aria-label="save"
                                                    onClick={() => props.addTask({
                                                        EventId:props.eventId,
                                                        TaskId:stateTaskId,
                                                        TaskName:stateName, 
                                                        TaskDescription:stateDescription,
                                                        StatusId:+status
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
                                        <IconButton aria-label="close" onClick={props.hideTask}>
                                            <CloseSharp />
                                        </IconButton>
                                    }
                                />

                                
                                    <CardContent sx={{ }}>
                                    
            <Box component="form" sx={{
                padding:"15px",
                '& .MuiTextField-root': { marginBottom:1.5 },
                }}>

                <FormControl sx={{ mb: 2, minWidth: 120 }}> 
                    <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                    <Select
                        labelId="Status"
                        id="status"
                        value={status}
                        label="Status"
                        onChange={onStatusChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>New</MenuItem>
                        <MenuItem value={2}>Active</MenuItem>
                        <MenuItem value={3}>Done</MenuItem>
                    </Select>
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>

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

                {/* <Stack spacing={2} direction="row">
                    <Button variant="text" 
                        onClick={() => props.addTask({
                            EventId:props.eventId,
                            TaskId:stateTaskId,
                            TaskName:stateName, 
                            TaskDescription:stateDescription,
                            })}>Save</Button>
                </Stack> */}
            </Box>

            </CardContent>
                                </Card>
                                
                            </Box>

        </React.Fragment>
    )
};

export default TaskForm;