import axios from 'axios';

export const url = 'https://covid19.mathdro.id/api';
export const getdata = async (country) =>{
  let varurl = url;
  if (country){
    varurl = `${url}/countries/${country}`;
    
  }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(varurl);
        return { confirmed, recovered, deaths, lastUpdate };
      } 
      catch (error) {
        console.log(error);
      }
};
export const getdailydata = async () => {
    try {
      const {data} = await axios.get(`${url}/daily`);
      const modifieddata = data.map((dailydata) => ({
        confirmed: dailydata.confirmed.total,
        deaths: dailydata.deaths.total,
        date: dailydata.reportDate
      }))
      return modifieddata;
    } catch (error) {
      console.log(error);
    }
  };
  export const getplaces = async () => {
    try {
      const {data: {countries}} = await axios.get(`${url}/countries`);
      return countries.map((country) => country.name);
    } catch (error) {
      console.log(error);
    }
  }
