import React from 'react';
import { useState, useEffect } from 'react'
import Project from './components/Project'
import { IProject, IEvent } from './interface/IEvent'
import api from './api/Event';

function App() {

  // State
  const [projectData, setProjectData] = useState({} as IProject);

  useEffect(()=>{
		const project = api.ProjectDetails(101);
    setProjectData(project);
	}, [])

  return (
    <div>

      <Project 
        projectId={projectData.id}
        projectName={projectData.name}
        projectDescription={projectData.description}
        />

    </div>
  );
}

export default App;
