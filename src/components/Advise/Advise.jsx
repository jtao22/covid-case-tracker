import React, {useState, useEffect} from 'react';
import styles from './Advise.module.css';
import CountUp from 'react-countup';

const Advise = ({data: {confirmed, deaths, recovered},country}) => {
    if(!confirmed){
        return "Preparing Information";
    }
    var active = confirmed.value - recovered.value;
    var answer = "";
    if(!country){
        return answer;
    }
    if(active < 50000 ){
        answer = `There are ${active} active cases. It is relatively safe, but be careful!`;
    }
    else if (active < 500000){
        answer = `There are ${active} active cases. It is highly unadvised that you visit this country!`;
    }
    else{
        answer = `There are ${active} active cases... yeah no.`;
    }
    return(
    <div>
        <h1>{answer} </h1>
    </div>
    )
}

export default Advise;