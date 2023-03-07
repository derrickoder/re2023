/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {FunctionComponent, useState} from 'react'
import {ISelectedEventId, IModalMethods} from '../interface/IEvent'
import api from '../api/Event';
import '../css/Event.css'
import Task from './Task'
import TaskCard from './TaskCard'
import Conversation from './Conversation'

const Event : FunctionComponent<ISelectedEventId & IModalMethods> = (props) => {

    // State
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(0);

    if(props.id === 0){
        return(<div></div>);
    }

    const showComponent = (props.visible) ? 'block' : 'none';

    // API calls
    let event = api.EventDetails(props.id);
    let tasks = api.TasksForEvent(props.id);

    // Functions
    const handleTaskCardModalOpen = (id:number) => {
        setSelectedTaskId(id);
        setShowTaskModal(true);
        console.log('showTaskModal: ', showTaskModal);
    };

    const handleTaskCardModalClose = () => {
        setSelectedTaskId(0);
        setShowTaskModal(false);
    };

    return(
        <div 
            css={css`
                display:${showComponent};
                // border:solid #333 1px;
                // padding:5px;
                // position:fixed;
                // left: 10px;
                // top: 10px;
                // width: 80%; /* Full width */
                // height: 80%; /* Full height */
                background-color: #E0FFFF;
            `}
            className="event-details">

            <div 
                css={css`
                    cursor:pointer;
                    color:#333;
                    font-size:12px;
                    font-family:tahoma;
                    margin-bottom:5px;
                `}
                onClick={() => props.closeModal()}
            >
                close
            </div>
            
            <div>Event: {event.id}</div>
            {event.name}
            <div>
                {event.description}
            </div>
            <h4>Tasks</h4>

            <button>+ Add Task</button>

            <div className="task-card-container">
                {
                    tasks.map(task => {
                        return (
                            <TaskCard 
                                key={task.id} 
                                users={task.users} 
                                eventId={task.eventId} 
                                id={task.id} 
                                name={task.name} 
                                description={task.description} 
                                openModal={handleTaskCardModalOpen}
                                />
                        )
                    })
                }
            </div>

            {/* <Conversation /> */}

            {/* <ul>
                <li>Target date of completion</li>
                <li>People involved and their tasks</li>
                <li>Conversations</li>
                <li>Edit event</li>
                <li>Add task</li>
            </ul> */}

            <Task 
                visible={showTaskModal}
                eventId={props.id}
                taskId={selectedTaskId}
                />
        </div>
    );
};

export default Event;