import React from 'react'

const RemoveAll = ({ destroyData }) => {
  const Bye = () => {
    destroyData();
  };

  return (
    <div>
        <button onClick={Bye} >BOOM</button>
    </div>
  )
}

export default RemoveAll