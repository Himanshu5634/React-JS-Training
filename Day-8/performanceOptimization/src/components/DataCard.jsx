import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../Hook/useIntersectionObserver";

const DataCard = ({ data, index ,loadMoreData}) => {
  const [load, setLoad] = useState(true);

  const imgRef = useRef(null);

  useIntersectionObserver(imgRef,loadMoreData)

  
  
  return (
    <div className="data-card">
      <h1>{index + 1}</h1>
      <div className="card-img">
        {load && <div class="image-skeleton"></div>}
        <img
          ref={imgRef}
          src={data.image}
          alt={data.image}
          loading="lazy"
          onLoad={() => {
            setLoad(false);
          }}
          onError={() => {
            setLoad(false);
          }}
        />
      </div>
      <div className="data-name">
        <h2> {data.name}</h2>
      </div>
      <div className="data-bio"><p>{data.bio}</p></div>
    </div>
  );
};

export default DataCard;
