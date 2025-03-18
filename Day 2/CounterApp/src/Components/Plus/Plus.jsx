import React from 'react'


const Plus = ({count,setCount}) => {

  const handelPlus = () => {
    setCount("inc", 1)
    console.log("plus clicked");
  }

  return (
    <div>
      <button className="btn-plus" onClick={handelPlus}>Plus (+)</button>
    </div>
  )
}

export default Plus
