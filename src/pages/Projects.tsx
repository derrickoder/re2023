import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from "react-router-dom";
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GenericDrawer from '../components/GenericDrawer';
import { IProjectFormData } from '../interface/IEvent'

const Projects = () => {

    interface IProjects{
        id:number;
        name:string;
        description:string;
    };

    const [projectsData, setProjectsData] = useState([] as IProjects[]);
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(()=>{
        const projects: IProjects[] = [{id:1, name:'Project 101', description:'This is project 101'}];
        setProjectsData(projects);
    }, [])

    const onToggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const onAddProject = (formData:IProjectFormData) => {
        const newProject: IProjects = { id:2, name: formData.name, description: formData.description};
        setProjectsData([...projectsData, newProject]);
    };

    return (
        <React.Fragment>
    
            <Box>
                <Stack spacing={0} direction="row">
                    <Button variant="text" onClick={onToggleDrawer}>Add Project</Button>
                </Stack>   

                {
                    projectsData.map(project => {
                        return (
                            <div>
                                <Link to={"/project/" + project.id}>{project.name}</Link>
                                <div>{project.description}</div>
                            </div>
                        );
                    })
                }

            </Box>

            <GenericDrawer 
                open={openDrawer}
                componentHeading="New Project"
                component="ProjectForm"
                toggleDrawer={onToggleDrawer} 
                addProject={onAddProject}                
                />

        </React.Fragment>
    );
};

export default Projects;