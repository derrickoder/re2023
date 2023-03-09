/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FunctionComponent, useState, useEffect } from 'react'
import { IEventComponentProps, IEventDetails } from '../interface/IEvent'
import '../css/Event.css'
import Task from './Task'
import TaskCard from './TaskCard'
import api from '../api/Event';

const Event : FunctionComponent<IEventComponentProps> = (props) => {
    
    // State
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(0);
    //const [eventDetails, setEventDetails] = useState({} as IEventDetails);

    // useEffect(()=>{
    //     //if(props.id !== 0){
    //         let eventData = api.EventDetails(props.id);
    //         console.log("eventData",eventData);
    //         setEventDetails(eventData);
    //     //}
    // }, [])    

    // if(props.id === 0 || !props.visible){
    //     return(<div>no id</div>);
    // }

    // Functions
    const handleTaskCardModalOpen = (id:number) => {
        setSelectedTaskId(id);
        setShowTaskModal(true);
        
    };

    return(
        <div 
            css={css`
                display:${(props.visible) ? 'block' : 'none'};
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
                onClick={() => props.hideComponent()}
            >
                close
            </div>
            
            <div>Event: {props.event.id}</div>
            {props.event.name}
            <div>Event: {props.event.id}</div>
            {props.event.name}
            <div>
                {props.event.description}
                {props.event.description}
            </div>
            <h4>Tasks</h4>

            <button onClick={props.addTask}>Add Task</button>

            <div className="task-card-container">
                {
                    props.tasks.map(task => {
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

            {/* <ul>
                <li>Target date of completion</li>
                <li>People involved and their tasks</li>
                <li>Conversations</li>
                <li>Edit event</li>
                <li>Add task</li>
            </ul> */}

            <Task 
                visible={showTaskModal}
                eventId={props.event.id}
                eventId={props.event.id}
                taskId={selectedTaskId}
                />
        </div>
    );
};

export default Event;