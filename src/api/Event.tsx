import { IEventDetails, ITask } from '../interface/IEvent'

const allData: IEventDetails[] = [
  { id: 1,
    name: 'Event 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tasks: [
      {users: [{id:1, email:"test@test.com"}], eventId: 1, id:1, name:'task 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:1, email:"test@test.com"}], eventId: 1, id:2, name:'task 2', description: 'incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:1, email:"test@test.com"}], eventId: 1, id:3, name:'task 3', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]},
  { id: 2,
    name: 'Event 2',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tasks: [
      {users: [{id:1, email:"test@test.com"}], eventId: 2, id:1, name:'task 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:1, email:"test@test.com"}], eventId: 2, id:2, name:'task 2', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:1, email:"test@test.com"}], eventId: 2, id:3, name:'task 3', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:1, email:"test@test.com"}], eventId: 2, id:4, name:'task 4', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:1, email:"test@test.com"}], eventId: 2, id:5, name:'task 5', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]},
  { id: 3,
    name: 'Event 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tasks: [
      {users: [{id:1, email:"test@test.com"}], eventId: 3, id:1, name:'task 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:1, email:"test@test.com"}], eventId: 3, id:2, name:'task 2', description: 'incididunt ut labore et dolore magna aliqua.'},
      //{id:3, name:'task 3', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]},
  { id: 4,
    name: 'Event 4',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tasks: [
      {users: [{id:1, email:"test@test.com"},{id:2, email:"test2@test.com"}], eventId: 4, id:1, name:'task 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:1, email:"test@test.com"}], eventId: 4, id:2, name:'task 2', description: 'incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:1, email:"test@test.com"}], eventId: 4, id:3, name:'task 3', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {users: [{id:1, email:"test@test.com"}], eventId: 4, id:4, name:'task 3', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  ]},
];

function EventDetails(id:number): IEventDetails {
  const data = allData.find(i => i.id === id) as IEventDetails;
  return data;
}

function TasksForEvent(eventId:number): ITask[] {
  if(eventId===0){
    return [];
  }
  const event = allData.find(i => i.id === eventId) as IEventDetails;
  return event.tasks;
}

export default {
  EventDetails,
  TasksForEvent
};