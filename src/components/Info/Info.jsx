import React from 'react';
import styles from './Info.module.css';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import cx from 'classnames';

const Info = ({data:{ confirmed ,recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return 'Preparing Information...';
    }
    return(
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Contracted</Typography>
                        <Typography variant = "h6" >{confirmed.value}</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Recovered</Typography>
                        <Typography variant = "h6" >{recovered.value}</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total recovered</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Deaths</Typography>
                            <Typography variant = "h6" >{deaths.value}</Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>    )
}

export default Info;