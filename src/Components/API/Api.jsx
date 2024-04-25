import React, { useContext, useEffect } from "react";
import { Data } from "../../App";

const Api = () => {
  const {url,setData}=useContext(Data);
  useEffect(() => {
    try {
      let api_key = "nzXgbk4dKxR7HoNiCyHy5cxUdUbuaq6kqNHXl8Mn9XODpmv8qmaYLbaM";
      async function fetData() {
        let request = await fetch(url,
          {
            headers: {
              Authorization: api_key,
            },
          }
        );
        let response = await request.json();
          setData(response?.photos);
      }
      fetData();
    } catch (error) {
      console.log(error);
    }
  }, [url]);
  return <div></div>;
};

export default Api;
