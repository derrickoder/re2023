/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { TimelineEventComponentProps } from '../interface/IEvent';
import '../css/TimelineEvent.css'

const TimelineEvent : FunctionComponent<TimelineEventComponentProps> = (props) => {
    return (
        <div className="eventCard" 
            onClick={() => props.timelineEventClick(props.event.id)}
            >
            <div css={css`font-size:12px;font-weight:bold;padding:10px;`}>{props.event.name}</div>
        </div>
    );
}

export default TimelineEvent;