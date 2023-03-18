import { IProject, IEvent, IEventDetails, ITask } from '../interface/IEvent'

const projectData: IProject = {
  'id': 101,
  'name': '1315 Blair Lane, Hoffman Estates, IL 60169',
  'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'events': [
    {'id': 1, 'name': 'Locate vendors', 'description': 'The quick brown fox jumped over.'},
    {'id': 2, 'name': 'Review and sign vendor contracts', 'description': 'The quick brown fox jumped over the lazy dogs.'},
    {'id': 3, 'name': 'Extend contrator agreement', 'description': 'The quick brown fox. The quick brown fox jumped over.'},
    {'id': 4, 'name': 'Execute land deal', 'description': 'The quick brown fox. The quick brown fox jumped over. The quick brown fox jumped over.'}
  ]
};

const allData: IEventDetails[] = [
  { id: 1,
    name: 'Locate vendors',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tasks: [
      {users: [{id:1, email:"test@test.com"}], statusId: 1, eventId: 1, id:1, name:'task # 1', description: 'Incididunt ut labore et dolore magna aliqua.  Incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:2, email:"test@test.com"}], statusId: 1, eventId: 1, id:3, name:'task # 3', description: 'Sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]},
  { id: 2,
    name: 'Review and sign vendor contracts',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tasks: [
      {users: [{id:1, email:"test@test.com"}], statusId: 1, eventId: 2, id:1, name:'task # 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]},
  { id: 3,
    name: 'Extend contrator agreement',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tasks: [
      {users: [{id:1, email:"test@test.com"}], statusId: 1, eventId: 3, id:1, name:'task # 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:2, email:"test@test.com"}], statusId: 2, eventId: 3, id:2, name:'task # 2', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:3, email:"test@test.com"}], statusId: 3, eventId: 3, id:3, name:'task # 3', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.'},
    ]},
  { id: 4,
    name: 'Execute land deal',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tasks: [
      {users: [{id:1, email:"test@test.com"},{id:2, email:"test2@test.com"}], statusId: 1, eventId: 4, id:1, name:'task 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  ]},
];

function EventDetails(id:number): IEventDetails {
  const data = allData.find(i => i.id === id) as IEventDetails;
  return (data === undefined) ? {} as IEventDetails : data;
}

function TasksForEvent(eventId:number): ITask[] {
  if(eventId===0){
    return [];
  }
  const event = allData.find(i => i.id === eventId) as IEventDetails;

  if(event !== undefined && event.tasks !== undefined){
    return event.tasks;
  }
  else{
    return [] as ITask[];
  }
}

function TaskForId(eventId:number, taskId:number): ITask {
  const event = allData.find(i => i.id === eventId)?.tasks as ITask[];
  const task = event.find(i => i.id === taskId) as ITask;
  return task;
}

const ProjectDetails = (projectId:number): IProject => {
  const project =  projectData;
  return { id:project.id, name:project.name, description:project.description } as IProject;
};

const EventsForProject = (projectId:number): IEvent[] => {
  return projectData.events as IEvent[];
};

export default {
  EventDetails,
  TasksForEvent,
  TaskForId,
  ProjectDetails,
  EventsForProject
};