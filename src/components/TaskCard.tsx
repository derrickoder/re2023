/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ITask, ITaskCardMethods } from '../interface/IEvent'
import User from './User'
import '../css/Task.css'

function TaskCard(props: (ITask & ITaskCardMethods)){
//    function TaskCard(props: ITask){
    // const handleOpenTask = () => {
    //     alert(props.id);
    // };

    return(
        <div className="task">
            <div
            css={css`
                font-family:tahoma;
                margin-bottom:3px;
                cursor:pointer;
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

            <ul>
                <li>Task status</li>
                <li>Target completion date</li>
            </ul>
        </div>
    );
}

export default TaskCard;