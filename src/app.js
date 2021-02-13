import React from 'react';
import styles from './app.module.css';
import {Info,Graph,Location} from './components';
import {getdata} from './api';

class App extends React.Component{
    state = {
        data:{},
    }
    async componentDidMount(){
        const gotdata = await getdata();
        this.setState({data:gotdata});
    }
    render(){
        const  { data } = this.state;
        return(
            <div className={styles.container}>
                <Info data={data}/>
                <Location/>
                <Graph/>
            </div>
        )
    }
}

export default App;