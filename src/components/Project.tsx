import { FunctionComponent, useState, useEffect } from 'react'
import { IProjectComponentProps, IEvent, IEventDetails, ITask, IAddTaskMethodInput } from '../interface/IEvent'
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
        // open a form
        // add to state
        const newEvent = { 
            id: 5,
            name: 'New event here!',
            description: 'New event here!',
            tasks: []};
        setStateProjectEventData([...stateProjectEventData, newEvent]);
    };

    const onAddTask = (input:IAddTaskMethodInput) => {
        const nextTaskId = stateEventTaskData.length + 1;
        const newTask = {
            users: [{id:1, email:"test@test.com"},{id:2, email:"test2@test.com"}], 
            eventId: input.EventId, 
            id:nextTaskId, 
            name: input.TaskName,
            description: input.TaskDescription
        };
            
        setStateEventTaskData([...stateEventTaskData, newTask]);
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
                event={stateEventData}
                tasks={stateEventTaskData}
                hideComponent={onHideEvent}
                addTask={onAddTask}
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