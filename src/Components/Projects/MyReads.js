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
import { green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import reads from '../icons/reads.png'
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
        backgroundColor: green[500],
    },
}));

export default function MyReads() {
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
                        M
          </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="My Reads"
                subheader="June 28, 2018"
            />
            <CardMedia
                className={classes.media}
                image={reads}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    #Myreads App is a book shelf app which allows users to interact with their personal library.
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <a href="https://github.com/imshreyansh/MyReads-App">  <IconButton aria-label="add to favorites">
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
                        There are three sections for the shelf :
    <br/>
    * Currently Reading
    <br/>
    * Want To Read
    <br/>
    * Read
    <br/>
    The three sections are divided as if a user is currently reading a book he/she can put the book in the shelf of currently reading ,if he/she wants to read it later they can put it in want to read shelf and if they already read that book they can put it in read shelf.
    
    For moving the book they have provided a button which includes some option,the button is available below each and every book which allows you to move the book from current shelf to other,In case if a user wants to remove the book from shelf he/she can select "None" option available in button The button also includes 4 options:
    
    Move To:
    <br/>
    * Currently Reading
    <br/>
    * Want To Read
    <br/>
    * Read
    <br/>
    * None
    <br/>
    There is a search button down below ,by clicking that button a user can move to the search page and be able to search a book which he/she wants to read ,all the books which are available on the search page have button which allows you to move the book in the shelf.
          </Typography>


                </CardContent>
            </Collapse>
        </Card>
    );
}
