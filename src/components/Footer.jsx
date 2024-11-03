import React from 'react'

function Footer(props) {

    const {showModal, handleToggleModal, data } = props

  return (
    <footer>
        <div className="background-gradient">

        </div>
        <div>
           <h1>APOD PROJECT</h1>
            <h2>{data?.title}</h2>
        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info" />
        </button>
    </footer>
  )
}

export default Footer