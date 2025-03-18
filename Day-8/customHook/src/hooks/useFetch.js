import { useState, useEffect } from "react";


/**
 * 
 * @param {String} url 
 * @param {String} method 
 * @param {Object} payload 
 * @returns {Object} 
 */
const useFetch = (url, method = "GET", payload = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


    const fetchData = async () => {
      try {
        setLoading(true)
        setData(null)
        if (!url) throw new Error("URL is required");
        if (method !== "GET" && !payload) {
          throw new Error(`Payload is required for ${method} request`);
        }
        console.log(payload,"payload");
        
        const options = {
          method,
          headers: { "Content-Type": "application/json" },
          ...(method !== "GET" && payload && { body: payload }),
        };

        console.log(options);
        
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null)
        setLoading(false)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        
      }
    };
  return { data, loading, error ,fetchData};
};

export default useFetch;
