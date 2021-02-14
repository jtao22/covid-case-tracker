import React from 'react';
import styles from './Info.module.css';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import cx from 'classnames';
import CountUp from 'react-countup';

const Info = ({data:{ confirmed ,recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return 'Preparing Information...';
    }
    return(
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs = {12} md={3} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Confirmed</Typography>
                        <Typography variant = "h7" ><CountUp start = {0} end = {confirmed.value} duration={2.4} separator=","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total confirmed</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs = {12} md={3} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Recovered</Typography>
                        <Typography variant = "h7" ><CountUp start = {0} end = {recovered.value} duration={2.4} separator=","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total recovered</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs = {12} md={3} className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Deaths</Typography>
                            <Typography variant = "h7" ><CountUp start = {0} end = {deaths.value} duration={2.4} separator=","/></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>    )
}

export default Info;