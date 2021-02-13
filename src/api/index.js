import axios from 'axios';

export const url = 'https://covid19.mathdro.id/api';
export const getdata = async () =>{
  let varurl = url;
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(varurl);
        return { confirmed, recovered, deaths, lastUpdate };
      } 
      catch (error) {
        console.log(error);
      }
};
