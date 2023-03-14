/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import { useState } from 'react'

import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

import { ITask, ITaskCardMethods } from '../interface/IEvent'
import User from './User'
import '../css/Task.css'

function TaskCard(props: (ITask & ITaskCardMethods)){

    // State
    const [showTask, setShowTask] = useState(false)

    // Methods
    const displayTask = () => {
        setShowTask(true);
    };

    return(
        <React.Fragment>
            <Box>
            <div
            css={css`
                font-family:tahoma;
                margin-bottom:3px;
                cursor:pointer;
                background-color: #FAF0E6;
            `}
            onClick={() => props.openModal(props.id)}
            >
                {props.name} ({props.id})
            </div>
            <div>{props.description}</div>
            {
                props.users.map(user =>{
                    return <User key={user.id} id={user.id} email={user.email} />
                })
            }
            </Box>

            

            <Paper variant="outlined" />
            
        </React.Fragment>
    );
}

export default TaskCard;