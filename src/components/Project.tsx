import { FunctionComponent, useState, useEffect } from 'react'
import { IProjectComponentProps, IEvent, IEventDetails, ITask, IProject } from '../interface/IEvent'
import Timeline from '../components/Timeline'
import Event from '../components/Event'
import api from '../api/Event';

const Project: FunctionComponent<IProjectComponentProps> = (props) => {

    // State
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEventId, setSelectedEventId] = useState(0);
    const [eventDetails, setEventDetails] = useState({} as IEventDetails);
    const [eventTasks, setEventTasks] = useState([] as ITask[]);

    // Methods
    const onTimelineEventClick = (id:number) => {
        setSelectedEventId(id);
        setShowEventModal(true);

        let eventData = api.EventDetails(id);
        let tasksData = api.TasksForEvent(id);
        
        setEventDetails(eventData);
        setEventTasks([...tasksData]);
    };

    const onCloseEvent = () => {
        setSelectedEventId(0);
        setShowEventModal(false);
    };

    const onAddEventClick = () => {
        alert('x');
    };

    return(
        <div>

            <div>
                Project: {props.projectId} &nbsp;&nbsp;
                {props.projectName}
            </div>

            <div>
                {props.projectDescription}
            </div>

            <button onClick={onAddEventClick}>Add Event</button>

            <Timeline 
                projectId={props.projectId}
                timelineEventClick={onTimelineEventClick} 
            />
            
            <Event
                id={selectedEventId} 
                visible={showEventModal}
                hideComponent={onCloseEvent}
                event={eventDetails}
                tasks={eventTasks}
            /> 
                    
            {/* <ul>
                <li>Target date of completion</li>
                <li>People involved and their tasks</li>
                <li>Attachments</li>
                <li>Add event</li>
                <li>Conversation</li>
            </ul> */}

        </div>
    );

}

export default Project;