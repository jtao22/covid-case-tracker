import React, {useState, useEffect} from 'react';
import styles from './Chart.module.css';
import {getdailydata} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

const Chart = ({data: {confirmed, deaths, recovered}, country}) => {
    const [dailydata,setdailydata] = useState([]);
    useEffect(() => {
        const getAPI = async() => {
            setdailydata(await getdailydata());
        }
        getAPI();
    });
    const linechart = (
        dailydata.length ? (<Line
            data={{
                labels:dailydata.map(({ date }) => date),
                datasets:[{
                    data:dailydata.map(({ confirmed }) => confirmed),
                    label: 'Contracted',
                    borderColor: '#990000',
                    fill: true
                },{
                    data:dailydata.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: '#000000',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    fill: true
                }],
            }}
        />) : null
    );
    const barchart = (
        dailydata.length ? (<Bar
            data={{
                labels: ['Contracted', 'Recovered', 'Deaths'],
                datasets:[{
                    label: 'People',
                    backgroundColor: ['rgba(153, 0, 0, 0.5)','rgba(0, 255, 0, 0.5)','rgba(0, 0, 0, 0.5)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display: false},
                title:{display:true, text: `Statistics in selected country`}
            }}
        />) : null
    );
    return(
    <div className = {styles.container}>
        {country ? barchart : linechart}
    </div>
    )
}

export default Chart;