import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import wyr from '../icons/wyr.png'
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[500],
    },
}));

export default function WouldYouRather() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClickW() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        W
          </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Would You Rather"
                subheader="September 25, 2018"
            />
            <CardMedia
                className={classes.media}
                image={wyr}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    #Would You Rather Project This is an app which is basically a game.
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <a href="https://github.com/imshreyansh/Would-You-Rather-Final-App"><IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton></a>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClickW}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Users can login to their account can toggle between options on navigation bar Dashboard shows the Unanswered and Answered Question of the Authenticated user User can vote for an specific option by clicking on the button provided in Unanswered Section User can view total number of votes, and other properties of the question in Answered Section Add Question will allow User to add a new Question to the Poll Leaderboard will show the user who have maximum score on the basis of total question asked + total answers given by the user Users can Sign Out from their account How To Run : -npm install -npm start.
    The project includes maximum or whole parts of Redux implemented onto it like Reducers, Actions, Middleware, Connect(), as well as a whole of React.
          </Typography>


                </CardContent>
            </Collapse>
        </Card>
    );
}
