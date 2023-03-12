import { FunctionComponent, useState, useEffect } from 'react'
import { IProjectComponentProps, IEvent, IEventDetails, ITask, IAddTaskMethodInput, IEventFormData } from '../interface/IEvent'
import Timeline from '../components/Timeline'
import Event from '../components/Event'
import api from '../api/Event';
import GenericDrawer from '../components/GenericDrawer';

const Project: FunctionComponent<IProjectComponentProps> = (props) => {

    // State
    const [stateShowEvent, setStateShowEvent] = useState(false);
    const [stateEventData, setStateEventData] = useState({} as IEventDetails);
    const [stateEventTaskData, setStateEventTaskData] = useState([] as ITask[]);
    const [stateProjectEventData, setStateProjectEventData] = useState([] as IEvent[]);
    const [openDrawer, setOpenDrawer] = useState(false);

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

    const onOpenForm = () => {
        // open a form
        onToggleDrawer();
    };

    const onAddEvent = (formData:IEventFormData) => {
        // add to state
        const newEvent = { 
            id: 5,
            name: formData.name,
            description: formData.description,
            tasks: []};
        setStateProjectEventData([...stateProjectEventData, newEvent]);
        onToggleDrawer();
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

    const onToggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const onRefreshData = (isUpdated:boolean) => {
        alert('refresh the data');
    }
    
    return(
        <div>

            <div className="component-id">
                Project: {props.projectId} &nbsp;&nbsp;
            </div>

            <div>
                {props.projectName}
            </div>

            <div>
                {props.projectDescription}
            </div>

            <button onClick={onOpenForm}>Add Event</button>

            <Timeline 
                projectId={props.projectId}
                timelineEventClick={onTimelineEventClick} 
                events={stateProjectEventData}
            />

            {
                stateShowEvent && (
                    <Event
                        visible={stateShowEvent}
                        event={stateEventData}
                        tasks={stateEventTaskData}
                        hideComponent={onHideEvent}
                        addTask={onAddTask}
                    /> 
                )
            }
                    
            <GenericDrawer 
                open={openDrawer}
                componentHeading="New Event"
                component="EventForm"
                toggleDrawer={onToggleDrawer} 
                refreshData={onRefreshData}
                addEvent={onAddEvent}
                />

        </div>
    );

}

export default Project;