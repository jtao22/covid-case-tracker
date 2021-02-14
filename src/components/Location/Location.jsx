import React, {useState, useEffect} from 'react';
import styles from './Location.module.css';
import {NativeSelect, FormControl} from '@material-ui/core';
import {getplaces} from '../../api';


const Location = ({changelocationstate}) => {
    const [gottenplaces,setgottenplaces] = useState([]);
    useEffect(()=>{
        const getAPI = async () => {
            setgottenplaces(await getplaces());
        }
        getAPI();
    },[setgottenplaces]);
    return(
        <FormControl className = {styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e) => changelocationstate(e.target.value)}>
                <option value="">Global</option>
                {gottenplaces.map((country,itr) => <option key={itr} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Location;