/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { TimelineEventComponentProps } from '../interface/IEvent';
import '../css/TimelineEvent.css'

const TimelineEvent : FunctionComponent<TimelineEventComponentProps> = (props) => {
    return (
        <div className="eventCard" 
            onClick={() => props.timelineEventClick(props.event.id)}
            css={css`
                background-color:#FFA07A;
                cursor:pointer;
            `}
            >
            <p>{props.event.name} ({props.event.id})</p>
            <p>{props.event.description}</p>

            <ul>
                <li>Status</li>
            </ul>
        </div>
    );
}

export default TimelineEvent;