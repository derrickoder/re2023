/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ITaskComponentProps } from '../interface/IEvent'
import Conversation from '../components/Conversation'

function Task(props: ITaskComponentProps){

    const showComponent = (props.visible) ? 'block' : 'none';

    return(
        <div id="task"
            css={css`
                display:${showComponent};
                border:solid #333 1px;
                padding:5px;
                position:fixed;
                left: 10px;
                top: 10px;
                width: 80%; /* Full width */
                height: 80%; /* Full height */
                background-color: #fff;
            `}
        >
            <div 
                css={css`
                    cursor:pointer;
                    color:#333;
                    font-size:12px;
                    font-family:tahoma;
                    margin-bottom:5px;
                `}
                onClick={() => props.closeModal()}
            >
                close
            </div>

            Task {props.id}

            <Conversation />

            <ul>
                <li>People involved</li>
                <li>Conversations</li>
                <li>Attachments</li>
                <li>Description of task</li>
                <li>Target date of completion</li>
            </ul>

        </div>
    );
}

export default Task;