/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ITaskComponentProps } from '../interface/IEvent'
import api from '../api/Event'
import '../css/Task.css'

function Task(props: ITaskComponentProps){

    if(props.taskId === 0){
        return(<div></div>);
    }

    const showComponent = (props.visible) ? 'block' : 'none';

    // API calls
    let task = api.TaskForId(props.eventId, props.taskId);

    return(
        <div id="task"
            css={css`
                display:${showComponent};
                // border:solid #333 1px;
                padding:15px;
                margin:5px;
                // position:fixed;
                // left: 10px;
                // top: 10px;
                // width: 80%; /* Full width */
                // height: 80%; /* Full height */
                background-color: #d9d9d9;
            `}
        >
            {/* <div 
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
            </div> */}

            <div className="task-id">Task: {props.taskId}</div>
            <div>{task.name}</div>
            <div>{task.description}</div>

        </div>
    );
}

export default Task;