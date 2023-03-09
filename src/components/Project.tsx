import { FunctionComponent, useState, useEffect } from 'react'
import { IProjectComponentProps, IEvent, IEventDetails, ITask, IProject } from '../interface/IEvent'
import Timeline from '../components/Timeline'
import Event from '../components/Event'
import api from '../api/Event';

const Project: FunctionComponent<IProjectComponentProps> = (props) => {

    // State
    const [stateShowEvent, setStateShowEvent] = useState(false);
    const [stateEventData, setStateEventData] = useState({} as IEventDetails);
    const [stateEventTaskData, setStateEventTaskData] = useState([] as ITask[]);
    const [stateProjectEventData, setStateProjectEventData] = useState([] as IEvent[]);

    useEffect(()=>{
        const projectEventsData = api.EventsForProject(props.projectId);
        setStateProjectEventData(projectEventsData);
    }, [])

    // Methods
    const onTimelineEventClick = (id:number) => {
        let eventData = api.EventDetails(id);
        let tasksData = api.TasksForEvent(id);
        setStateEventData(eventData);
        setStateEventTaskData([...tasksData]);
        setStateShowEvent(true);
    };

    const onHideEvent = () => {
        setStateShowEvent(false);
    };

    const onAddEvent = () => {
        alert('x');
        // open a form
        // add to state

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

            <button onClick={onAddEvent}>Add Event</button>

            <Timeline 
                projectId={props.projectId}
                timelineEventClick={onTimelineEventClick} 
                events={stateProjectEventData}
            />
            
            <Event
                visible={stateShowEvent}
                hideComponent={onHideEvent}
                event={stateEventData}
                tasks={stateEventTaskData}
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