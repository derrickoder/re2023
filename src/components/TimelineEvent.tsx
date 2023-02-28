import React, {FunctionComponent} from 'react'
import { IEvent } from '../interface/IEvent';
import '../css/TimelineEvent.css'

//function TimelineEvent(prop: {eventId:number; eventName:string}){
const TimelineEvent : FunctionComponent<IEvent> = (props) => {
    const handleEventCardClick = (id: number) => {
        alert(id);
    };

    return (
        <div className="eventCard" onClick={() => handleEventCardClick(props.id)}>
            <p>{props.name} ({props.id})</p>
            <p>{props.description}</p>
        </div>
    );
}

export default TimelineEvent;