import React from 'react';

import FetchGit from '../api/FetchGit';

import Fade from '@material-ui/core/Fade';
import { Grid, Paper, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function Github() {
    const classes = useStyles();
    let repos: any[] = [];
    fetch('https://api.github.com/users/drammaster/repos').then(res => res.json()).then(data => repos = data)
    console.log(repos)

    return(
            <div  className={classes.root}>
                <Grid container justify="center" spacing={3}>
                    {(repos).map((value:any) => (
                        <Fade in={true} timeout={1000}>
                            <Grid key={value.id} item>
                                <Paper className={classes.paper}>{value.id}</Paper>
                            </Grid>
                        </Fade>
                    ))}
                </Grid>
            </div>
    )
}

export default Github;