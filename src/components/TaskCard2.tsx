import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import EditSharp from '@mui/icons-material/EditSharp';
import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { FunctionComponent, useState } from 'react'
import { ITaskCardComponentProps } from '../interface/IEvent';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
}));

const TaskCard2 : FunctionComponent<ITaskCardComponentProps> = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
    <Card 
      sx={{ 
        maxWidth: 225, 
        margin: 1, 
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        }}>
        <CardHeader
          sx={{backgroundColor:"lightGreen"}}

            // avatar={
            //     <Avatar sx={{ bgcolor: red[500] }} aria-label="">
            //         dg
            //     </Avatar>
            // }
            // action={
            //   <IconButton 
            //       aria-label="edit"
            //       onClick={() => props.editTask(props.id)}>
            //       <EditSharp />
            //   </IconButton>
            // }
            title={
              <Box>
                <Typography variant='subtitle2' color="text.secondary">
                  Task ID: {props.id}
                  {/* <IconButton 
                      aria-label="edit"
                      onClick={() => props.editTask(props.id)}>
                      <EditSharp />
                  </IconButton> */}
                </Typography>

                
              </Box>
            }

            subheader=""
        />
        {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
        /> */}

        <CardContent>
        
          {/* <Stack direction="row" spacing={1} sx={{margin:0}}>
              <Chip label={"Status:" + props.statusId} size="small" sx={{backgroundColor:'darkseagreen'}}/>
          </Stack> */}

          <Typography variant="body2" sx={{marginBottom:1}}>
              Status: {props.statusId}
          </Typography>

          <Typography variant="h6"
              sx={{textDecoration:"underline",cursor:"pointer"}}
              onClick={() => props.showTask!(false, props.id)}>
              {props.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
              {props.description}
          </Typography>

        </CardContent>
        <CardActions disableSpacing sx={{mt: "auto"}}>

            
            
            {/* <IconButton 
                aria-label="edit"
                onClick={() => props.editTask(props.id)}>
                <EditSharp />
            </IconButton>
            
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
            </ExpandMore> */}

              

              <Avatar sx={{ bgcolor: red[500] }} aria-label="">
                  dg
              </Avatar>

              {/* <IconButton 
                  aria-label="edit"
                  onClick={() => props.editTask(props.id)}>
                  <EditSharp />
              </IconButton> */}
        </CardActions> 
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default TaskCard2;