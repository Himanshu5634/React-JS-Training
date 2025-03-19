import React, {  useState } from "react";

import posts from "./assets/data.json";
import Data from "./components/Data";

function App() {
  // const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([
    {
      name: "",
      language: "",
      id: "",
      bio: "",
      version: 0,
      image: ""
    }
  ]);
  const [page, setPage] = useState(0);
  
  // const myRef = useRef();

  // const fetchData = useCallback(async () => {
  //   try {
  //     // const res = await fetch("https://microsoftedge.github.io/Demos/json-dummy-data/5MB.json");
  //     // const response = await res.json();

  //     // setData(posts);
  //     // setVisibleData(posts.slice(0, 4));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     if (entry.isIntersecting && visibleData.length < posts.length) {
  //       loadMoreData();
  //     }
  //   });
  //   if (myRef.current) {
  //     observer.observe(myRef.current);
  //   }
  //   return () => {
  //     if (myRef.current) {
  //       observer.unobserve(myRef.current);
  //     }
  //   };
  // }, [visibleData]);


  /**
   * @description add 4 post in to the visibledata
   */
  const loadMoreData = () => {
    const newPage = page + 1;
    const newVisibleData = posts.slice(0, newPage * 4);
    setVisibleData(newVisibleData);
    setPage(newPage);
  };

  return (
    <>
      <div className="container">
        <div className="data">
         <Data visibleData={visibleData} loadMoreData={loadMoreData}/>
        </div>  
      </div>
    </>
  );
}

export default App;
