import React from 'react'


const Minus = ({count,setCount}) => {

  const handelMinus = () => {
    setCount('dec',1)
  }

  return (
    <div>
      <button onClick={handelMinus} className='minus'>Minus (-)</button>
    </div>
  )
}

export default Minus
