import React from 'react'

function SideBar(props) {
    const { handleToggleModal, data } = props


  return (
    <div className='sidebar'>
        <div onClick={ handleToggleModal }
            className="background-overlay"
        ></div>
        <div className="sidebar-contents">
            <h2>{data?.title}</h2>
            <div className='description-container'>
                <p className="description-title">{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={ handleToggleModal }>
                <i className="fa-solid fa-arrow-right" />
            </button>
        </div>
    </div>
  )
}

export default SideBar