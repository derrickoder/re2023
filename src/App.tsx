import Timeline from './components/Timeline'
import Event from './components/Event'
import { IProject } from './interface/IEvent'
import { IEventsPlusAction, ISelectedEventId } from './interface/IEvent';
import React, { useState } from 'react';

function App() {

  const [selectedEventId, setSelectedEventId] = useState<ISelectedEventId>({id:0});

  const onSelect = (id:number) => {
    setSelectedEventId({id:id});
  };

  const project: IProject = {
    'id': 101,
    'name': 'project 1',
    'description': 'The quick brown fox jumped.',
    'events': [
      {'id': 1, 'name': 'Event 1', 'description': 'The quick brown fox.'},
      {'id': 2, 'name': 'Event 2', 'description': 'The quick brown fox.'},
      {'id': 3, 'name': 'Event 3', 'description': 'The quick brown fox.'},
      {'id': 4, 'name': 'Event 4', 'description': 'The quick brown fox.'}
    ]
  };

  return (
    <div>
      Project: {project.name}
      <Timeline events={project.events} onSelect={onSelect} />
      <Event id={selectedEventId.id}/>
    </div>
  );
}

export default App;
