import {FunctionComponent} from 'react'
import {ISelectedEventId} from '../interface/IEvent'
import api from '../api/Event';
import '../css/Event.css'
import Task from './Task'

const Event : FunctionComponent<ISelectedEventId> = (props) => {

    let event = api.EventDetails(props.id);

    if(props.id !== 0){
        return(
            <div className="event-details">
                
                <h3>{event.name} ({event.id})</h3>
                <div>{event.description}</div>
                <h4>Tasks</h4>
                <div className="task-container">
                    {
                        event.tasks.map(task => {
                            return (<Task id={task.id} name={task.name} description={task.description} />)
                        })
                    }
                </div>
            </div>
        );
    }

    return (
        <div>select an event</div>
    );
};

export default Event;