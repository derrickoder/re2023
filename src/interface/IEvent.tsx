interface IProject {
    id: number;
    name: string;
    description: string;
    events?: IEvent[];
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
    visible?: boolean;
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
    eventId: number;
    taskId: number;
    visible?: boolean;
    //closeModal: () => void;
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

interface IProjectComponentProps{
    projectId:number;
    projectName:string;
    projectDescription:string;
}

interface IEventComponentProps{
    visible:boolean;
    hideComponent: () => void;
    event:IEventDetails;
    tasks?:ITask[];
    addTask: (input:IAddTaskMethodInput) => void;
}

interface ITimelineComponentProps{
    timelineEventClick: (id:number) => void;
    projectId:number;
    events:IEvent[];
}

interface TimelineEventComponentProps{
    event:IEvent;
    timelineEventClick: (id:number) => void;
}

interface IAddTaskComponentProps{
    eventId:number;
    addTask: (input:IAddTaskMethodInput) => void;
}

interface IAddTaskMethodInput {
    EventId:number;
    TaskName:string;
    TaskDescription:string;
}

interface IGenericDrawer{
    open:boolean;
    componentHeading:string,
    component:string;
    toggleDrawer: () => void;
    refreshData: (isUpdated:boolean) => void;
    addEvent: (formData:IEventFormData) => void;
}

interface IEventFormComponent{
    addEvent: (formData:IEventFormData) => void;
}

interface IEventFormData{
    name:string;
    description:string;
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
    IModalMethods,
    IEventComponentProps,
    IProjectComponentProps,
    ITimelineComponentProps,
    TimelineEventComponentProps,
    IAddTaskComponentProps,
    IAddTaskMethodInput,
    IGenericDrawer,
    IEventFormComponent,
    IEventFormData,
};