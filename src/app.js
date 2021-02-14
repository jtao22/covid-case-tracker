import React from 'react';
import styles from './app.module.css';
import {Info,Chart,Location} from './components';
import {getdata} from './api';

class App extends React.Component{
    state = {
        data:{},
        country:'',
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
        const  { data,country } = this.state;
        return(
            <div className={styles.container}>
                <h1>International COVID Case Tracker</h1>
                <Info  data={data}/>
                <h1></h1>
                <Location changelocationstate={this.changelocationstate}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;