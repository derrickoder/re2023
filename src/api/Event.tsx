import { IEventDetails, ITask } from '../interface/IEvent'

function EventDetails(id:number): IEventDetails {
  const allData: IEventDetails[] = [
    { id: 1, 
      name: 'Event 1', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      tasks: [
        {id:1, name:'task 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:2, name:'task 2', description: 'incididunt ut labore et dolore magna aliqua.'},
        {id:3, name:'task 3', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      ]},
    { id: 2, 
      name: 'Event 2', 
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
      tasks: [
        {id:1, name:'task 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        //{id:2, name:'task 2', description: 'incididunt ut labore et dolore magna aliqua.'},
        {id:3, name:'task 2', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:3, name:'task 3', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:3, name:'task 4', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:3, name:'task 5', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      ]},
    { id: 3, name: 'Event 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', tasks: [
      {id:1, name:'task 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {id:2, name:'task 2', description: 'incididunt ut labore et dolore magna aliqua.'},
      //{id:3, name:'task 3', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]},
    { id: 4, name: 'Event 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',tasks: [
      {id:1, name:'task 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {id:2, name:'task 2', description: 'incididunt ut labore et dolore magna aliqua.'},
      {id:3, name:'task 3', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {id:4, name:'task 3', description: 'sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]},
  ];

  const data = allData.find(i => i.id === id) as IEventDetails;

  return data;
}

function TaskDetails(id:number): ITask {
  const allData: ITask[] = [
    { id: 1, name: 'Task 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, name: 'Task 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 3, name: 'Task 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 4, name: 'Task 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  const data = allData.find(i => i.id === id) as ITask;

  return data;
}

export default {
  EventDetails,
  TaskDetails
};