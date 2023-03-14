import React from 'react';
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
    const [stateSelectedEventId, setStateSelectedEventId] = useState(0);
    const [stateEventTaskData, setStateEventTaskData] = useState([] as ITask[]);
    const [stateSelectedTaskId, setStateSelectedTaskId] = useState(0);
    const [stateProjectEventData, setStateProjectEventData] = useState([] as IEvent[]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [componentDrawer, setComponentDrawer] = useState("");
    const [componentDrawerAction, setComponentDrawerAction] = useState("new");

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

    const onAddEvent = (formData:IEventFormData) => {
        if(formData.eventId === 0){
            const newEvent = { 
                id: 5,
                name: formData.name,
                description: formData.description,
                tasks: []};
            setStateProjectEventData([...stateProjectEventData, newEvent]);
        }
        else{
            const updatedEvents = stateProjectEventData.map(event => {
                if(event.id === formData.eventId){
                    return {
                        ...event,
                        name: formData.name,
                        description: formData.description
                    }
                }
                else{
                    return event;
                }
            });
            setStateProjectEventData(updatedEvents);
        }

        
        // onToggleDrawer("event", "add");
    };

    const onAddTask = (input:IAddTaskMethodInput) => {
        if(input.TaskId === 0){
            const nextTaskId = stateEventTaskData.length + 1;
            const newTask = {
                users: [{id:1, email:"test@test.com"},{id:2, email:"test2@test.com"}], 
                eventId: input.EventId, 
                id:nextTaskId, 
                name: input.TaskName,
                description: input.TaskDescription
            };
            setStateEventTaskData([...stateEventTaskData, newTask]);
        }
        else{
            const updatedTasks = stateEventTaskData.map(task => {
                if(task.id === input.TaskId){
                    return {
                        ...task,
                        name: input.TaskName,
                        description: input.TaskDescription
                    }
                }
                else{
                    return task;
                }
            });
            setStateEventTaskData(updatedTasks);
        }
        
            
    };

    const onEditTask = (taskId:number) => {
        setStateSelectedTaskId(taskId)
        setComponentDrawerAction("edit");
        setComponentDrawer("TaskForm");
        setOpenDrawer(!openDrawer);
    };

    const onEditEvent = (eventId:number) => {
        setStateSelectedEventId(eventId);
        setComponentDrawerAction("edit");
        setComponentDrawer("EventForm");
        setOpenDrawer(!openDrawer);
    };

    const onToggleDrawer = (component:string, componentAction:string) => {
        setComponentDrawer(component);
        setComponentDrawerAction(componentAction);
        setOpenDrawer(!openDrawer);
    };

    return(
        <React.Fragment>

            <div className="component-id">
                Project: {props.projectId} &nbsp;&nbsp;
            </div>

            <div>
                {props.projectName}
            </div>

            <div>
                {props.projectDescription}
            </div>

            <button onClick={() => onToggleDrawer("EventForm", "Add")}>Add Event</button>

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
                        toggleDrawer={onToggleDrawer}
                        hideComponent={onHideEvent}
                        addTask={onAddTask}
                        editTask={onEditTask}
                        editEvent={onEditEvent}
                    /> 
                )
            }
                    
            <GenericDrawer 
                open={openDrawer}
                componentHeading="New Event"
                component={componentDrawer}
                componentAction={componentDrawerAction}
                toggleDrawer={onToggleDrawer} 
                addEvent={onAddEvent}
                addTask={onAddTask}
                eventId={stateEventData.id}
                taskId={stateSelectedTaskId}
                />

        </React.Fragment>
    );
}

export default Project;