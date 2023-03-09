import { FunctionComponent, useState, useEffect } from 'react'
import { IEvent, ITimelineComponentProps } from '../interface/IEvent'
import TimelineEvent from './TimelineEvent'
import '../css/Timeline.css'
import api from '../api/Event';

const Timeline: FunctionComponent<ITimelineComponentProps> = (props) => {

    // State
    const[projectEvents, setProjectEvents] = useState([] as IEvent[]);

    useEffect(()=>{
        const projectEventsData = api.EventsForProject(props.projectId);
        setProjectEvents(projectEventsData);
    }, [])

    return (
        <div className="event-card-container">
            {
                projectEvents.map(event => {
                    return(<TimelineEvent key={event.id} event={event} timelineEventClick={props.timelineEventClick} />)
                })
            }
        </div>
    );
};

export default Timeline;