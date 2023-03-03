import Timeline from './components/Timeline'
import Event from './components/Event'
import Conversation from './components/Conversation'
import { IProject } from './interface/IEvent'
import { IEventsPlusAction, ISelectedEventId } from './interface/IEvent';
import React, { useState } from 'react';

function App() {

  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(0);

  const onOpenModal = (id:number) => {
    setSelectedEventId(id);
    setShowEventModal(true);
  };

  const onCloseModal = () => {
    setSelectedEventId(0);
    setShowEventModal(false);
  };

  const project: IProject = {
    'id': 101,
    'name': 'Project RE (beta)',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'events': [
      {'id': 1, 'name': 'Event 1', 'description': 'The quick brown fox.'},
      {'id': 2, 'name': 'Event 2', 'description': 'The quick brown fox.'},
      {'id': 3, 'name': 'Event 3', 'description': 'The quick brown fox.'},
      {'id': 4, 'name': 'Event 4', 'description': 'The quick brown fox.'}
    ]
  };

  return (
    <div>
      <div>
        Project: {project.id} &nbsp;&nbsp;
        <input type="text" value={project.name}></input>
      </div>
      <div>
        <textarea rows={5} cols={40}>{project.description}</textarea>
      </div>

      

      <button>+ Add Event</button>

      <Timeline events={project.events} onSelect={onOpenModal} />

      <Conversation />
      
      <Event id={selectedEventId} visible={showEventModal} closeModal={onCloseModal}/>
      
      <ul>
          <li>Target date of completion</li>
          <li>People involved and their tasks</li>
          <li>Attachments</li>
          <li>Add event</li>
          <li>Conversation</li>
      </ul>
    </div>
  );
}

export default App;
