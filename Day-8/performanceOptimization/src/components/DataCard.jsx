import React, { useEffect, useRef, useState } from "react";

const DataCard = ({ data, index }) => {
  const [load, setLoad] = useState(true);
  
  const imgRef = useRef(null);


  const handleLoading = () => {
    console.log("ok")
    
    setLoad(false)
  };
  const random = parseInt(Math.random() * 100)


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if(entry.isIntersecting ){
        // console.log("intersecting");
        handleLoading();
      } 
    })
    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
  return (
    <div className="data-card">
      <h1>{index + 1}</h1>
      <div className="card-img">
        {load && <div class="image-skeleton"></div>
        }
        <img
          ref={imgRef}
          // src={`https://picsum.photos/200/300?success=${random}`}
          alt={`img-${random}`}
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
      <div className="data-bio">{data.bio}</div>
    </div>
  );
};

export default DataCard;
