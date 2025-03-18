import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DataCard from "./components/dataCard";
import posts from "./assets/data.json";

function App() {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [page, setPage] = useState(1);
  const myRef = useRef();

  const fetchData = useCallback(async () => {
    try {
      // const res = await fetch("https://microsoftedge.github.io/Demos/json-dummy-data/5MB.json");
      // const response = await res.json();

      setData(posts);
      setVisibleData(posts.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && visibleData.length < data.length) {
        loadMoreData();
      }
    });
    if (myRef.current) {
      observer.observe(myRef.current);
    }
    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, [visibleData, data]);

  const loadMoreData = () => {
    const newPage = page + 1;
    const newVisibleData = data.slice(0, newPage * 4);
    setVisibleData(newVisibleData);
    setPage(newPage);
  };

  // useEffect(() => {
  //   console.log(data);

  // },[data])

  return (
    <>
      <div className="container">
        <div className="data">
          {visibleData.map((i, index) => (
            <DataCard key={index} index={index} data={i} />
          ))}
        </div>
        <div ref={myRef} style={{ height: "20px" }}></div>
      </div>
    </>
  );
}

export default App;
