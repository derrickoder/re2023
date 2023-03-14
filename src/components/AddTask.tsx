import { FunctionComponent, useState } from 'react'
import { IAddTaskComponentProps } from '../interface/IEvent'

const AddTask:FunctionComponent<IAddTaskComponentProps> = (props) => {

    const [stateName, setStateName] = useState('');
    const [stateDescription, setStateDescription] = useState('');

    const onNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setStateName(event.currentTarget.value);
    };

    const onDescriptionChange = (event: React.FormEvent<HTMLInputElement>) => {
        setStateDescription(event.currentTarget.value);
    };

    return (
        <div>
            {/* <h3>Add Task</h3>

            <div>
                Name:
                <input 
                    type="textbox" onChange={onNameChange} />
            </div>

            <div>
                Description:
                <input type="textbox" onChange={onDescriptionChange} />
            </div>

            <div>
                <button onClick={() => props.addTask({
                    EventId:props.eventId, 
                    TaskDescription:stateDescription, 
                    TaskName:stateName
                    })}>Add</button>
            </div> */}
        </div>
    );
};

export default AddTask