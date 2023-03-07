/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { ITask, ITaskCardMethods } from '../interface/IEvent'
import User from './User'
import Task from './Task'
import '../css/Task.css'

function TaskCard(props: (ITask & ITaskCardMethods)){

    // State
    const [showTask, setShowTask] = useState(false)

    // Methods
    const displayTask = () => {
        setShowTask(true);
    };

    return(
        <div className="task"
        css={css`
            background-color: #FFF0F5;
        `}
        >
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

            {/* <ul>
                <li>Task status</li>
                <li>Target completion date</li>
            </ul> */}

            
        </div>
    );
}

export default TaskCard;