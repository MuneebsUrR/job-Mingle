import React, { createContext, useContext, useState } from 'react';

const context = createContext();

export const JobDetailState = ({ children }) => {
    const [what, setwhat] = useState('');
    const [where, setwhere] = useState('');
    async function fetchDatafromAPI() {
      let url = `https://jsearch.p.rapidapi.com/search?query=${what} in ${where}&page=2&num_pages=20`;
    
        try {
    
          let response = await fetch(url, {
            method: "GET",
            headers: {
              'X-RapidAPI-Key': 'ebcffba3b9msh775b8483c055eabp133e14jsn0200b41cea3c',
              'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
            }
          });
          let data = await response.json();
    
          setAllJobsData(data.data);
          console.log(data);
        
        } catch (error) {
          console.log(error);
        }
      }

   
    const [jobDetails , setJobDetails] = useState({
    });
    const [allJobsData, setAllJobsData]= useState([]);
   
    return (
        <context.Provider value={{ setwhat, setwhere,what, where,fetchDatafromAPI,jobDetails, setJobDetails, allJobsData,setAllJobsData }}> {children} </context.Provider>
    )

}


export const useJobDetailContext = () => useContext(context); 