import React from 'react';
import styles from './app.module.css';
import {Info,Graph,Location} from './components';

class App extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <Info/>
                <Location/>
                <Graph/>
            </div>
        )
    }
}

export default App;