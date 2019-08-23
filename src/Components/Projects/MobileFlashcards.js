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
import { brown } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import fc from '../icons/fc.png'
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
        backgroundColor: brown[500],
    },
}));

export default function MobileFlashcards() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        F
          </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Mobile Flashcards"
                subheader="October 05, 2018"
            />
            <CardMedia
                className={classes.media}
                image={fc}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    A Quiz Mobile App which works Cross Platform(Ios & Android).
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <a href="https://github.com/imshreyansh/FlashCards"> <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton></a>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Mobile Flash Card : It is an a Mobile App runs both with  Ios, Android  Developed In React Native.

    This App is tested on Android.

    This app lets you add decks so that you can create your own quiz and play .

    After creating a deck you can add cards which includes Question as well as Answer of that particular Question,

    You can add as many number of questions you want to add.

    After Adding Questions You can start the quiz by clicking on the specific Deck .

    At the End Your Score will be shown in percentage.

Note: If there is No card in the Deck the Start Quiz Button Will Be Disabled          </Typography>


                </CardContent>
            </Collapse>
        </Card>
    );
}
