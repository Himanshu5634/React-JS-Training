import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const Fetch = () => {
  const [method, setMethod] = useState("GET");
  const [payload, setPayload] = useState("");
  const [url, setUrl] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState([]);
  //   const [error, setError] = useState(false);

  const { data, error, loading, fetchData } = useFetch(url, method, payload);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  //   console.log(response.data);

  return (
    <>
      <div className="fetch-data">
        <h2>Fetch Data</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="top">
            <div className="input">
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
              <input
                type="text"
                placeholder="Enter URL"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="fetch-btn">
              <button type="submit">Submit</button>
            </div>
          </div>
          <div className="payload">
            {method !== "GET" && (
              <textarea
                placeholder="Enter JSON payload"
                value={payload}
                onChange={(e) => setPayload(e.target.value)}
                
                
              />
            )}
          </div>
        </form>
        <hr />
      </div>
      <div className="display">
        {loading ? <p>Loading...</p> : <> </>}
        {error ? <p style={{ color: "red" }}>{error}</p> : <></>}
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <></>}
      </div>
    </>
  );
};

export default Fetch;
