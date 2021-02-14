import React from 'react';
import styles from './app.module.css';
import {Info,Chart,Location} from './components';
import {getdata} from './api';

class App extends React.Component{
    state = {
        data:{},
    }
    async componentDidMount(){
        const gotdata = await getdata();
        this.setState({data:gotdata});
    }
    changelocationstate = async (country) => {
        const gotdata = await getdata(country);   
        this.setState({data:gotdata, country:country});  
    }
    render(){
        const  { data } = this.state;
        return(
            <div className={styles.container}>
                <Info  data={data}/>
                <Location changelocationstate={this.changelocationstate}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;