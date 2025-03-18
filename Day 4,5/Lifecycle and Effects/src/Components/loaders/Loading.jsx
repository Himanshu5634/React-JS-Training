import React from "react";

const Loading = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div className="loading-card" key={i}>
          <div className="loading-image"></div>
          <div className="loading-title"></div>
          <div className="loading-link"></div>
        </div>
      ))}
    </>
  );
};

export default Loading;
