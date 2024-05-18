import React, { createContext, useContext, useState } from "react";

const context = createContext();

export const JobDetailState = ({ children }) => {
  const [what, setwhat] = useState("");
  const [where, setwhere] = useState("");
  const [page, setPage] = useState(1);
  const [loginUser, setLoginUser] = useState(null);
  const [loading,setLoading]=useState(false);
  async function fetchDatafromAPI() {
    

    let url = `https://jsearch.p.rapidapi.com/search?query=${what} in ${where}&page=${page}&num_pages=20`;

    try {
      const queryParameters = new URLSearchParams(window.location.search);
      queryParameters.set("what", what);
      queryParameters.set("where", where);
      queryParameters.set("page", page);
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${queryParameters}`
  );
      setLoading(true);
      let response = await fetch(url, {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': '840cf39458msh0d42c1ba0a5e456p1ab493jsnfd2536a0911f',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      });
   
      
      let data = await response.json();

      setAllJobsData(data.data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const [jobDetails, setJobDetails] = useState({});

  const [allJobsData, setAllJobsData] = useState([]);

  return (
    <context.Provider
      value={{
        setwhat,
        setwhere,
        what,
        where,
        fetchDatafromAPI,
        jobDetails,
        setJobDetails,
        allJobsData,
        setAllJobsData,
        setLoginUser,
        loginUser,
        loading,
      }}
    >
      {" "}
      {children}{" "}
    </context.Provider>
  );
};

export const useJobDetailContext = () => useContext(context);
