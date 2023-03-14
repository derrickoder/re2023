/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FunctionComponent, useState } from 'react'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import AddSharp from '@mui/icons-material/AddSharp';
import CloseSharp from '@mui/icons-material/CloseSharp';
import EditSharp from '@mui/icons-material/EditSharp';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';



import '../css/Event.css'
import { IEventComponentProps } from '../interface/IEvent'
import Task from './Task'
import TaskCard from './TaskCard'
import TaskCard2 from './TaskCard2'


const Event : FunctionComponent<IEventComponentProps> = (props) => {
    
    // State
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);

    // Functions
    const onDisplayTaskCard = (id:number) => {
        setSelectedTaskId(id);
        setShowTaskModal(true);
    };

    const onToggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const onRefreshData = (isUpdated:boolean) => {
        alert('refresh the data');
    }

    return(
        <div 
            css={css`
                display:${(props.visible) ? 'block' : 'none'};
                // border:solid #333 1px;
                // padding:5px;
                // position:fixed;
                // left: 10px;
                // top: 10px;
                // width: 80%; /* Full width */
                // height: 80%; /* Full height */
                background-color: #E0FFFF;
            `}
            className="event-details">

            <Box sx={{float:"right"}}>
                <IconButton 
                    aria-label="edit"
                    onClick={props.hideComponent}>
                    <CloseSharp />
                </IconButton>
            </Box>

            <Box sx={{padding:2}}>
                <Typography variant='subtitle2' color="text.secondary">
                    Event: {props.event.id}

                    <IconButton 
                    aria-label="edit"
                    onClick={() => props.editEvent(props.event.id)}>
                    <EditSharp />
                </IconButton>
                </Typography>
                <Typography variant="h6">
                    {props.event.name}
                </Typography>
                <Typography>
                    {props.event.description}
                </Typography>
            </Box>

            <Box sx={{padding:2}}>
                <Typography variant="h5">
                    Tasks
                </Typography>

                <div className="task-card-container">
                    {
                        props.tasks?.map(task => {
                            return (
                                <TaskCard2
                                    id={task.id} 
                                    name={task.name} 
                                    description={task.description} 
                                    editTask={props.editTask}/>
                            )
                        })
                    }

                    <Card sx={{ maxWidth: 245, margin: 1, maxHeight: 400 }}>
                        <CardContent sx={{textAlign:"center"}}>
                            <Typography variant="body2" color="text.secondary">
                                <IconButton 
                                    aria-label="edit"
                                    onClick={() => props.toggleDrawer("TaskForm", "Add")}>
                                    <AddSharp />
                                </IconButton>
                            </Typography>
                            <Typography>Add Task</Typography>
                        </CardContent>
                    </Card>
                </div>
            </Box>

            

            


           

            

        </div>
    );
};

export default Event;