import React from 'react'

function Footer(props) {

    const {showModal, handleToggleModal, data } = props

  return (
    <footer>
        <div className="background-gradient"></div>
        <div className='footer-container'>
          <h1>Astrological Picture of the Day for <span className='date'>{ data?.date }</span></h1>
          {/* <h1 className='date'>{ data?.date }</h1>           */}
          <h2>{data?.title}</h2>
        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info" />
        </button>
    </footer>
  )
}

export default Footer