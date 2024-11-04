import React from 'react'

function Main(props) {
    const {data} = props
  return (
    <div className='image-container'>
      <img src={data.hdurl}
          alt={data.title || 'background-imgage' }
          className="background-image" />
    </div>    
  )
}

export default Main