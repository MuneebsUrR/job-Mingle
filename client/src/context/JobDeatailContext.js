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
      setLoading(false);
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "58ce39cc1amsha4354a3355d61d5p15a347jsn0f6c11dcc7da",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      });
      const queryParameters = new URLSearchParams(window.location.search);
          queryParameters.set("what", what);
          queryParameters.set("where", where);
          queryParameters.set("page", page);
          window.history.replaceState(
            {},
            "",
            `${window.location.pathname}?${queryParameters}`
      );
      
      let data = await response.json();

      setAllJobsData(data.data);
      setLoading(true);
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
      }}
    >
      {" "}
      {children}{" "}
    </context.Provider>
  );
};

export const useJobDetailContext = () => useContext(context);
