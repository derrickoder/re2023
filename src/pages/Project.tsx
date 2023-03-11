import { useState, useEffect } from 'react';
import React from 'react';
import ProjectComponent from '../components/Project'
import { IProject } from '../interface/IEvent'
import api from '../api/Event';

const Project = () => {

    // State
    const [projectData, setProjectData] = useState({} as IProject);

    useEffect(()=>{
		const project = api.ProjectDetails(101);
        setProjectData(project);
	}, [])

    return (
        <React.Fragment>
    
            <ProjectComponent 
                projectId={projectData.id}
                projectName={projectData.name}
                projectDescription={projectData.description}
                />

        </React.Fragment>
    );
};

export default Project;