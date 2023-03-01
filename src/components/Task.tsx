import {FunctionComponent} from 'react'
import {ISelectedTaskId, ITask} from '../interface/IEvent'
import '../css/Task.css'
import api from '../api/Event'

function Task(props: ITask){
    return(
        <div className="task">
            <h4>{props.name} ({props.id})</h4>
            <div>{props.description}</div>
        </div>
    );

}

// const Task : FunctionComponent<ISelectedTaskId> = (props) => {

    

//     if(props.id !== 0){
//         return(
//             <div className="task">
//             <h4>Task</h4>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
//         </div>
//         );
//     }

//     return (
//         <div>select an event</div>
//     );
// };

export default Task;