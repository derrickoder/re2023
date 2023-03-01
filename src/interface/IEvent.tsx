interface IProject {
    id: number;
    name: string;
    events: IEvent[];
    description: string;
}
interface IEvent {
    id: number;
    name: string;
    description: string;
}

interface IEvents{
    events:IEvent[];
};

interface IEventsPlusAction{
    events: IEvent[];
    onSelect: (id:number) => void;
};

interface IEventPlusAction{
    event: IEvent;
    onSelect: (id:number) => void;
};

interface IEventProps{
    id: number;
}

interface ISelectedEventId{
    id: number;
}

interface IEventDetails{
    id: number;
    name: string;
    description: string;
    tasks: ITask[];
}

interface ITask{
    id: number;
    name: string;
    description: string;
}

interface ISelectedTaskId{
    id: number;
}

export type {
    IEvent,
    IEvents,
    IProject,
    IEventPlusAction,
    IEventsPlusAction,
    ISelectedEventId,
    IEventDetails,
    ITask,
    ISelectedTaskId
};