import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from "react-router-dom";
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GenericDrawer from '../components/GenericDrawer';
import { IProjectFormData } from '../interface/IEvent'

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import { CardHeader } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import EditSharp from '@mui/icons-material/EditSharp';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red, blue, yellow } from '@mui/material/colors';
import Chip from '@mui/material/Chip';

import axios from 'axios';

import getStatusDescription from '../common/wfStatus';

const Projects = () => {

    interface IProjects{
        Id:number;
        Name:string;
        Description:string;
        Image:string;
        StatusId:number;
        CreatedDate:string;
    };

    const [projectsData, setProjectsData] = useState([] as IProjects[]);
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(()=>{
        // const projects: IProjects[] = [
        //     {
        //         id:1, 
        //         name:'1315 Blair Lane, Hoffman Estates, IL 60169', 
        //         description:'We are selling our beautiful home.',
        //         image:'house.PNG'
        //     },
        //     {
        //         id:2, 
        //         name:'900 N. Kingsbury St. # 821, Chicago, IL 60610', 
        //         description:'We are renting our beautiful condo.',
        //         image:'condo.PNG'
        //     },
        // ];
        // setProjectsData(projects);
        getProjects();

    }, [])

    const onToggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const onAddProject = (formData:IProjectFormData) => {
        // const newProject: IProjects = { id:2, name: formData.name, description: 
        //     formData.description, image:"house.PNG"};
        // setProjectsData([...projectsData, newProject]);
    };

    const getProjects = () => {
        axios.get("https://localhost:7097/Project")
            .then(projects => {
                const data = projects.data
                console.log(data);
                setProjectsData(data);
            });
    };


    return (
        <React.Fragment>

        <Box>
            <Stack spacing={0} direction="row">
                <Button variant="text" onClick={onToggleDrawer}>Add Project</Button>
            </Stack>   
        </Box>

        <Stack spacing={3} direction="row">
        {
            projectsData.map(project => {
                return (
                    <Card sx={{ 
                        maxWidth: "290px", 
                        margin: 0, 
                        justifyContent: "space-between",
                        display: "flex",
                        flexDirection: "column",
                        key: project.Id
                    }}>
                        <CardHeader 
                            sx={{ bgcolor: "#e9e9e9" }}
                            title={
                                <Typography variant='subtitle2' color="text.secondary">
                                    Project ID: {project.Id}
                                    <IconButton 
                                        aria-label="edit"
                                        //onClick={() => props.editEvent(props.event.id)}
                                        >
                                        <EditSharp />
                                    </IconButton>

                                    
                                    <Typography variant="h6" sx={{color:"black"}}>
                                        <Link to={"/project/" + project.Id}>{project.Name}</Link>    
                                    </Typography>

                                    <Typography>
                                        Created: {new Date(project.CreatedDate).toLocaleDateString()}
                                    </Typography>

                                    <Stack direction="row" spacing={1} sx={{fontWeight:"bold"}}>
                                        <Chip label={"" + getStatusDescription(project.StatusId)} 
                                            size="medium" sx={{backgroundColor:"white"}} />
                                    </Stack>

                                </Typography>
                            }

                            action={
                                <Box>

                                </Box>
                            }
                        />

                        <CardMedia
                            component="img"
                            height="194"
                            image={require('../images/' + project.Image)}
                            alt="Paella dish"
                            />

                        <CardContent sx={{ }}>
                            <Typography>{project.Description}</Typography>

                        </CardContent>

                        <CardActions disableSpacing sx={{mt: "auto"}}>
                            <Box sx={{display:"flex",margin:1}}>
                                <Avatar sx={{ bgcolor: red[500], marginRight:.5 }} aria-label="">
                                    dg
                                </Avatar>
                                <Avatar sx={{ bgcolor: blue[500], marginRight:.5 }} aria-label="">
                                    yg
                                </Avatar>
                                <Avatar sx={{ bgcolor: yellow[700], marginRight:.5 }} aria-label="">
                                    bg
                                </Avatar>
                            </Box>
                        </CardActions>
                    </Card>
                );
            })
        }
        </Stack>   

    
            {/* <Box>
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

            </Box> */}

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