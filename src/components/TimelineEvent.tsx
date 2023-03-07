/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, {FunctionComponent} from 'react'
import { IEventPlusAction } from '../interface/IEvent';
import '../css/TimelineEvent.css'

const TimelineEvent : FunctionComponent<IEventPlusAction> = (props) => {
    return (
        <div className="eventCard" 
            onClick={() => props.onSelect(props.event.id)}
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