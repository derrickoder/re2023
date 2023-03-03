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
    visible: boolean;
}

interface IEventDetails{
    id: number;
    name: string;
    description: string;
    tasks: ITask[];
}

interface ITask{
    id: number;
    eventId: number;
    name: string;
    description: string;
    users: IUser[];
}

interface ITaskComponentProps{
    visible: boolean;
    id: number;
    closeModal: () => void;
}

interface ITaskCardMethods{
    openModal: (id:number) => void;
}

interface IModalMethods{
    //openModal?: (id:number) => void;
    closeModal: () => void;
}

interface IUser{
    id: number;
    email: string;
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
    ISelectedTaskId,
    IUser,
    ITaskCardMethods,
    ITaskComponentProps,
    IModalMethods
};