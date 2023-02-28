interface IEvent {
    id: number;
    name: string;
    description: string;
}

interface IProject {
    id: number;
    name: string;
    events: IEvent[];
    description: string;
}

export type {
    IEvent,
    IProject
};