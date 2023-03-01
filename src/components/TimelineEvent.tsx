import React, {FunctionComponent} from 'react'
import { IEventPlusAction } from '../interface/IEvent';
import '../css/TimelineEvent.css'

const TimelineEvent : FunctionComponent<IEventPlusAction> = (props) => {
    return (
        <div className="eventCard" onClick={() => props.onSelect(props.event.id)}>
            <p>{props.event.name} ({props.event.id})</p>
            <p>{props.event.description}</p>
        </div>
    );
}

export default TimelineEvent;