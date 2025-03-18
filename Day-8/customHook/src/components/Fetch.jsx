import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const Fetch = () => {
  const [method, setMethod] = useState("GET");
  const [payload, setPayload] = useState("");
  const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);


const {data,error,loading,fetchData} = useFetch(url, method, payload);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData()
  };
//   console.log(response.data);

  return (
    <div>
      <h2>Fetch Data</h2>
    <h3>https://jsonplaceholder.typicode.com/posts</h3>
    <h3>https://jsonplaceholder.typicode.com/users</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <label>
          Select Method:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        {method !== "GET" && (
          <textarea
            placeholder="Enter JSON payload"
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
          />
        )}
        <button type="submit">Submit</button>
      </form>
      <hr />
      {loading ? <p>Loading...</p> : <> </>}
      {error ? <p style={{ color: "red" }}>{error}</p> : <></>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <></>}
    </div>
  );
};

export default Fetch;
