import React from "react";
import DataCard from "./DataCard";

const Data = ({ visibleData, loadMoreData }) => {
  return (
  <>
  
  {visibleData?.map((data, index) => (
        <div key={index}  className="visible-component">
          <DataCard data={data} index={index} loadMoreData={index === visibleData.length - 1 ? loadMoreData : () => {}} />
        </div>
      ))}
  </>
   
  );
};

export default Data;
